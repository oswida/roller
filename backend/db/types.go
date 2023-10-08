package db

import "github.com/google/uuid"

type RollInfo struct {
	Id            string    `json:"id"`
	UserId        uuid.UUID `json:"userId"`
	User          string    `json:"user"`
	UserColor     string    `json:"userColor"`
	Tstamp        string    `json:"tstamp"`
	Realtstamp    int       `json:"realtstamp,omitempty"`
	Result        string    `json:"result"`
	DiceColor     string    `json:"diceColor"`
	DiceMaterial  string    `json:"diceMaterial,omitempty"`
	Comment       string    `json:"comment,omitempty"`
	SuccessRule   string    `json:"successRule,omitempty"`
	SuccessTarget int       `json:"successTarget,omitempty"`
	Private       bool      `json:"private,omitempty"`
	Revealed      bool      `json:"revealed,omitempty"`
}

type RoomInfo struct {
	Id     string `json:"id"`
	Name   string `json:"name"`
	Owner  string `json:"owner"`
	Bkguri string `json:"background,omitempty"`
}

type CsInfo struct {
	Id       string         `json:"id"`
	Name     string         `json:"name"`
	Owner    uuid.UUID      `json:"owner"`
	Template string         `json:"template"`
	Values   map[string]any `json:"values"`
	Shared   bool           `json:"shared,omitempty"`
	Portrait string         `json:"portraitUrl,omitempty"`
}

type UserUpdateData struct {
	ID       uuid.UUID      `json:"id"`
	IsAdmin  bool           `json:"is_admin"`
	Name     string         `json:"name"`
	Settings map[string]any `json:"settings"`
}

type RollDefInfo struct {
	ID            string `json:"id"`
	Name          string `json:"name"`
	Dice          string `json:"dice"`
	Modifier      int    `json:"modifier"`
	SuccessRule   string `json:"successRule"`
	SuccessTarget string `json:"successTarget"`
	Comment       string `json:"comment,omitempty"`
	Shared        bool   `json:"shared"`
}
