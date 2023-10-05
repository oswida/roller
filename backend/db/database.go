package db

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"rpgroll/ent"
	"rpgroll/ent/charsheet"
	"rpgroll/ent/roll"
	"rpgroll/ent/rolldef"
	"rpgroll/ent/room"
	"rpgroll/ent/user"

	"github.com/google/uuid"
	"github.com/knadh/koanf/v2"
	_ "github.com/xiaoqidun/entps"
	"go.uber.org/zap"
	"golang.org/x/crypto/argon2"
)

type Database struct {
	Client *ent.Client
	Log    *zap.Logger

	config *koanf.Koanf
}

func createAdminUser(client *ent.Client, cfg *koanf.Koanf) error {
	_, err := client.User.Query().Where(user.LoginEQ("admin")).First(context.Background())
	if err != nil {
		hash := argon2.IDKey([]byte("admin"), []byte(cfg.String("web.jwt_secret")), 1, 64*1024, 4, 32)
		settings := make(map[string]interface{})
		settings["color"] = "#000000"
		return client.User.Create().
			SetID(uuid.New()).
			SetName("Admin").
			SetLogin("admin").
			SetIsAdmin(true).
			SetPasswd(fmt.Sprintf("%x", hash)).
			SetSettings(settings).Exec(context.Background())
	}
	return nil
}

func NewDatabase(log *zap.Logger, cfg *koanf.Koanf) (*Database, error) {
	client, err := ent.Open("sqlite3", "file:./roller.db")
	if err != nil {
		return nil, err
	}
	if err := client.Schema.Create(context.Background()); err != nil {
		return nil, err
	}
	if err := createAdminUser(client, cfg); err != nil {
		return nil, err
	}
	return &Database{
		Client: client,
		Log:    log,
		config: cfg,
	}, nil
}

func (d *Database) Close() {
	d.Client.Close()
}

// Charsheets

func (d *Database) CsUpdate(userID string, data CsInfo) ([]byte, error) {
	cs, _ := d.Client.Charsheet.Get(context.Background(), data.Id)
	if cs == nil {
		err := d.Client.Charsheet.Create().
			SetID(data.Id).
			SetName(data.Name).
			SetOwnerID(data.Owner).
			SetPortrait(data.Portrait).
			SetShared(data.Shared).
			SetTemplate(data.Template).
			SetValues(data.Values).Exec(context.Background())
		if err != nil {
			return nil, err
		}
	} else {
		err := d.Client.Charsheet.UpdateOneID(data.Id).
			SetName(data.Name).
			SetOwnerID(data.Owner).
			SetPortrait(data.Portrait).
			SetShared(data.Shared).
			SetTemplate(data.Template).
			SetValues(data.Values).Exec(context.Background())
		if err != nil {
			return nil, err
		}
	}
	return []byte{}, nil
}

func (d *Database) CsDelete(csID string) ([]byte, error) {
	err := d.Client.Charsheet.DeleteOneID(csID).Exec(context.Background())
	if err != nil {
		return nil, err
	}
	return []byte("OK"), nil
}

func (d *Database) CsList(userID uuid.UUID) ([]byte, error) {
	list, err := d.Client.Charsheet.Query().
		Where(charsheet.Or(
			charsheet.HasOwnerWith(user.IDEQ(userID)),
			charsheet.SharedEQ(true))).
		All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(list)
}

// Users

func (d *Database) UserUpdate(userID uuid.UUID, data UserUpdateData) ([]byte, error) {
	err := d.Client.User.
		UpdateOneID(userID).
		SetName(data.Name).
		SetSettings(data.Settings).Exec(context.Background())
	if err != nil {
		return nil, err
	}
	usr, err := d.Client.User.Get(context.Background(), userID)
	if err != nil {
		return nil, err
	}
	return json.Marshal(usr)
}

func (d *Database) UserGet(userID uuid.UUID, clearPasswd bool) ([]byte, error) {
	usr, err := d.Client.User.Get(context.Background(), userID)
	if err != nil {
		return nil, err
	}
	if clearPasswd {
		usr.Passwd = ""
	}
	return json.Marshal(usr)
}

func (d *Database) UserCreate(name string, passwd string) ([]byte, error) {
	hash := argon2.IDKey([]byte(passwd), []byte(d.config.String("web.jwt_secret")), 1, 64*1024, 4, 32)
	userID := uuid.New()
	settings := map[string]interface{}{
		"color": "#000000",
	}
	err := d.Client.User.
		Create().
		SetID(userID).
		SetName(name).
		SetLogin(name).
		SetIsAdmin(false).
		SetPasswd(fmt.Sprintf("%x", hash)).
		SetSettings(settings).
		Exec(context.Background())
	if err != nil {
		return nil, err
	}
	usr, err := d.Client.User.Get(context.Background(), userID)
	if err != nil {
		return nil, err
	}
	return json.Marshal(usr)
}

// Rooms

func (d *Database) RoomUpdate(userID uuid.UUID, roomID string, data RoomInfo) ([]byte, error) {
	room, _ := d.Client.Room.Get(context.Background(), roomID)
	if room == nil {
		err := d.Client.Room.Create().
			SetID(roomID).
			SetName(data.Name).
			SetBkg(data.Bkguri).
			SetOwnerID(userID).Exec(context.Background())
		if err != nil {
			return nil, err
		}
	} else {
		err := d.Client.Room.UpdateOneID(roomID).
			SetName(data.Name).
			SetBkg(data.Bkguri).
			SetOwnerID(userID).Exec(context.Background())
		if err != nil {
			return nil, err
		}
	}
	room, err := d.Client.Room.Get(context.Background(), roomID)
	if err != nil {
		return nil, err
	}
	return json.Marshal(room)
}

func (d *Database) RoomDelete(roomID string) ([]byte, error) {
	err := d.Client.Room.DeleteOneID(roomID).Exec(context.Background())
	if err != nil {
		d.Log.Error("RoomDelete", zap.Error(err))
		return nil, err
	}

	return []byte{}, nil
}

func (d *Database) RoomList(idents []string) ([]byte, error) {
	rooms, err := d.Client.Room.Query().
		Where(room.IDIn(idents...)).
		WithOwner(func(uq *ent.UserQuery) { uq.FirstID(context.Background()) }).
		All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(rooms)
}

// Rolls

func (d *Database) RollUpdate(userID uuid.UUID, roomID string, data RollInfo) ([]byte, error) {
	roll, _ := d.Client.Roll.Get(context.Background(), data.Id)
	if roll == nil {
		err := d.Client.Roll.Create().
			SetID(data.Id).
			SetComment(data.Comment).
			SetDiceColor(data.DiceColor).
			SetDiceMaterial(data.DiceMaterial).
			SetOwnerID(data.UserId).
			SetPrivate(data.Private).
			SetResult(data.Result).
			SetRevealed(data.Revealed).
			SetSuccessRule(data.SuccessRule).
			SetSuccessTarget(data.SuccessTarget).
			SetTime(time.Now()).
			SetTstamp(data.Tstamp).
			SetRoomID(roomID).
			Exec(context.Background())
		if err != nil {
			return nil, err
		}
	} else {
		err := d.Client.Roll.UpdateOneID(data.Id).
			SetComment(data.Comment).
			SetDiceColor(data.DiceColor).
			SetDiceMaterial(data.DiceMaterial).
			SetOwnerID(data.UserId).
			SetPrivate(data.Private).
			SetResult(data.Result).
			SetRevealed(data.Revealed).
			SetSuccessRule(data.SuccessRule).
			SetSuccessTarget(data.SuccessTarget).
			SetTime(time.Now()).
			SetTstamp(data.Tstamp).
			Exec(context.Background())
		if err != nil {
			return nil, err
		}
	}
	roll, err := d.Client.Roll.Get(context.Background(), data.Id)
	if err != nil {
		return nil, err
	}
	return json.Marshal(roll)
}

func (d *Database) RollList(roomID string) ([]byte, error) {
	rolls, err := d.Client.Roll.Query().Where(roll.HasRoomWith(room.IDEQ(roomID))).All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(rolls)
}

func (d *Database) RollClear(roomID string) ([]byte, error) {
	_, err := d.Client.Roll.Delete().Where(roll.HasRoomWith(room.IDEQ(roomID))).Exec(context.Background())
	return []byte{}, err
}

// Roll definition

func (d *Database) RollDefUpdate(userID uuid.UUID, data RollDefInfo) ([]byte, error) {
	def, _ := d.Client.RollDef.Get(context.Background(), data.ID)
	if def == nil {
		err := d.Client.RollDef.Create().
			SetID(data.ID).
			SetName(data.Name).
			SetComment(data.Comment).
			SetDice(data.Dice).
			SetModifier(data.Modifier).
			SetOwnerID(userID).
			SetShared(data.Shared).
			SetSuccessRule(data.SuccessRule).
			SetSuccessTarget(data.SuccessTarget).
			Exec(context.Background())
		if err != nil {
			return nil, err
		}
	} else {
		err := d.Client.RollDef.UpdateOneID(data.ID).
			SetName(data.Name).
			SetComment(data.Comment).
			SetDice(data.Dice).
			SetModifier(data.Modifier).
			SetOwnerID(userID).
			SetShared(data.Shared).
			SetSuccessRule(data.SuccessRule).
			SetSuccessTarget(data.SuccessTarget).
			Exec(context.Background())
		if err != nil {
			return nil, err
		}
	}
	def, err := d.Client.RollDef.Get(context.Background(), data.ID)
	if err != nil {
		return nil, err
	}
	return json.Marshal(def)
}

func (d *Database) RollDefList(userID uuid.UUID) ([]byte, error) {
	defs, err := d.Client.RollDef.Query().
		Where(rolldef.Or(rolldef.HasOwnerWith(user.IDEQ(userID)), rolldef.SharedEQ(true))).
		All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(defs)
}

func (d *Database) RollDefDelete(defID string) ([]byte, error) {
	err := d.Client.RollDef.DeleteOneID(defID).Exec(context.Background())
	if err != nil {
		return nil, err
	}
	return []byte{}, nil
}
