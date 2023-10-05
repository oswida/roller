package db

import (
	"context"
	"fmt"
	"rpgroll/ent"
	"rpgroll/ent/user"

	"github.com/knadh/koanf/v2"
	"golang.org/x/crypto/argon2"
)

func hashPasswd(passwd string, cfg *koanf.Koanf) string {
	hash := argon2.IDKey([]byte(passwd), []byte(cfg.String("web.jwt_secret")), 1, 64*1024, 4, 32)
	return fmt.Sprintf("%x", hash)
}

func (d *Database) Login(login string, passwd string) (*ent.User, error) {
	h := hashPasswd(passwd, d.config)
	// d.Log.Info("database login", zap.String("username", login), zap.String("pass", h))
	return d.Client.User.Query().
		Where(user.And(user.LoginEQ(login), user.PasswdEQ(h))).
		First(context.Background())
}
