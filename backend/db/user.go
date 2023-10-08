package db

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/google/uuid"
	"golang.org/x/crypto/argon2"
)

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
