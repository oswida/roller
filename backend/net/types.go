package net

import (
	"rpgroll/db"
)

type RollMessage struct {
	Sender string      `json:"sender"`
	Room   string      `json:"room"`
	Data   db.RollInfo `json:"data"`
}

type RoomMessage struct {
	Sender string      `json:"sender"`
	Room   string      `json:"room"`
	Data   db.RoomInfo `json:"data"`
}

type ListMessage struct {
	Sender string   `json:"sender"`
	Room   string   `json:"room"`
	Data   []string `json:"data"`
}

type CsMessage struct {
	Sender string    `json:"sender"`
	Room   string    `json:"room"`
	Data   db.CsInfo `json:"data"`
}
