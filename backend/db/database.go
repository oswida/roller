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
	_ "github.com/xiaoqidun/entps"
	"golang.org/x/crypto/argon2"
	// _ "modernc.org/sqlite"
)

type DB struct {
	Client *ent.Client
}

func createAdminUser(client *ent.Client) error {
	_, err := client.User.Query().Where(user.LoginEQ("admin")).First(context.Background())
	if err != nil {
		hash := argon2.IDKey([]byte("admin"), []byte("anything"), 1, 64*1024, 4, 32)
		return client.User.Create().
			SetID(uuid.NewString()).
			SetName("Admin").
			SetLogin("admin").
			SetPasswd(fmt.Sprintf("%x", hash)).
			SetColor("#000000").
			SetSettings(make(map[string]interface{})).Exec(context.Background())
	}
	return nil
}

func NewDatabase() (*DB, error) {
	client, err := ent.Open("sqlite3", "file:./roller.db")
	if err != nil {
		return nil, err
	}
	if err := client.Schema.Create(context.Background()); err != nil {
		return nil, err
	}
	if err := createAdminUser(client); err != nil {
		return nil, err
	}
	return &DB{
		Client: client,
	}, nil
}

func (d *DB) Close() {
	d.Client.Close()
}

// Charsheets

func (d *DB) CsUpdate(userID string, data CsInfo) ([]byte, error) {
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

func (d *DB) CsDelete(csID string) ([]byte, error) {
	err := d.Client.Charsheet.DeleteOneID(csID).Exec(context.Background())
	if err != nil {
		return nil, err
	}
	return []byte("OK"), nil
}

func (d *DB) CsList(userID string) ([]byte, error) {
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

func (d *DB) UserUpdate(userID string, data UserUpdateData) ([]byte, error) {
	err := d.Client.User.
		UpdateOneID(userID).
		SetName(data.Name).
		SetColor(data.Color).
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

func (d *DB) UserGet(userID string, clearPasswd bool) ([]byte, error) {
	usr, err := d.Client.User.Get(context.Background(), userID)
	if err != nil {
		return nil, err
	}
	if clearPasswd {
		usr.Passwd = ""
	}
	return json.Marshal(usr)
}

// Rooms

func (d *DB) RoomUpdate(userID string, roomID string, data RoomInfo) ([]byte, error) {
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

func (d *DB) RoomDelete(roomID string) ([]byte, error) {
	err := d.Client.Room.DeleteOneID(roomID).Exec(context.Background())
	if err != nil {
		return nil, err
	}
	return []byte("OK"), nil
}

func (d *DB) RoomList(idents []string) ([]byte, error) {
	rooms, err := d.Client.Room.Query().Where(room.IDIn(idents...)).All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(rooms)
}

// Rolls

func (d *DB) RollUpdate(userID string, roomID string, data RollInfo) ([]byte, error) {
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

func (d *DB) RollList(roomID string) ([]byte, error) {
	rolls, err := d.Client.Roll.Query().Where(roll.HasRoomWith(room.IDEQ(roomID))).All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(rolls)
}

func (d *DB) RollClear(roomID string) ([]byte, error) {
	_, err := d.Client.Roll.Delete().Where(roll.HasRoomWith(room.IDEQ(roomID))).Exec(context.Background())
	return []byte{}, err
}

// Roll definition

func (d *DB) RollDefUpdate(userID string, data RollDefInfo) ([]byte, error) {
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

func (d *DB) RollDefList(userID string) ([]byte, error) {
	defs, err := d.Client.RollDef.Query().
		Where(rolldef.Or(rolldef.HasOwnerWith(user.IDEQ(userID)), rolldef.SharedEQ(true))).
		All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(defs)
}

func (d *DB) RollDefDelete(defID string) ([]byte, error) {
	err := d.Client.RollDef.DeleteOneID(defID).Exec(context.Background())
	if err != nil {
		return nil, err
	}
	return []byte("OK"), nil
}
