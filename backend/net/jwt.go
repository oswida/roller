package net

import (
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type JwtClaims struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	IsAdmin bool   `json:"is_admin"`
	jwt.RegisteredClaims
}

const JwtLifetimeInMinutes = 60

func GenerateJwt(key []byte, claims JwtClaims) (string, error) {
	claims.RegisteredClaims.ExpiresAt = &jwt.NumericDate{Time: time.Now().Add(time.Minute * JwtLifetimeInMinutes)}
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	s, err := t.SignedString(key)
	if err != nil {
		return "", err
	}
	return s, nil
}

func ParseJwt(key []byte, tokenString string) (*JwtClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &JwtClaims{}, func(token *jwt.Token) (interface{}, error) {
		return key, nil
	})
	if err != nil {
		return nil, err
	}
	claims, ok := token.Claims.(*JwtClaims)
	if !ok || !token.Valid {
		return nil, errors.New("token not valid or without proper claims")
	}
	return claims, nil
}
