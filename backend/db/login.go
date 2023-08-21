package db

import (
	"context"
	"fmt"
	"rpgroll/ent"
	"rpgroll/ent/user"

	"golang.org/x/crypto/argon2"
)

func hashPasswd(passwd string) string {
	hash := argon2.IDKey([]byte(passwd), []byte("anything"), 1, 64*1024, 4, 32)
	return fmt.Sprintf("%x", hash)
}

func (d *DB) Login(login string, passwd string) (*ent.User, error) {
	h := hashPasswd(passwd)
	return d.Client.User.Query().
		Where(user.And(user.LoginEQ(login), user.PasswdEQ(h))).
		First(context.Background())
}
