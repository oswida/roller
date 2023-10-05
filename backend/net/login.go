package net

import (
	"encoding/json"
	"net/http"
	"rpgroll/db"

	"github.com/knadh/koanf/v2"
	"go.uber.org/zap"
)

type Credentials struct {
	Password string `json:"password"`
	Username string `json:"username"`
}

func LoginHandler(dbase *db.Database, cfg *koanf.Koanf, logger *zap.Logger) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var creds Credentials
		err := json.NewDecoder(r.Body).Decode(&creds)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		usr, err := dbase.Login(creds.Username, creds.Password)
		if err != nil {
			logger.Error("login error ", zap.Error(err))
			w.WriteHeader(http.StatusUnauthorized)
			return
		}

		token, err := GenerateJwt([]byte(cfg.String("web.jwt_secret")), JwtClaims{
			ID:      usr.ID.String(),
			Name:    usr.Name,
			IsAdmin: usr.IsAdmin,
		})
		if err != nil {
			logger.Error("error creating jwt token", zap.Error(err))
			w.WriteHeader(http.StatusUnauthorized)
			return
		}

		w.Write([]byte(token))
	})
}
