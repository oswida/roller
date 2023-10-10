package db

import (
	"context"
	"encoding/json"
	"errors"
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

func (d *Database) UserCreate(name string, passwd string, isAdmin bool) ([]byte, error) {
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
		SetIsAdmin(isAdmin).
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

func (d *Database) UserChangePassword(userID uuid.UUID, oldPassword string, newPassword string) error {
	usr, err := d.Client.User.Get(context.Background(), userID)
	if err != nil {
		return err
	}
	h1 := hashPasswd(oldPassword, d.config)
	if h1 != usr.Passwd {
		d.Log.Error("Password change: bad old password")
		return errors.New("bad old password")
	}
	h2 := hashPasswd(newPassword, d.config)
	return d.Client.User.UpdateOneID(userID).SetPasswd(h2).Exec(context.Background())
}
