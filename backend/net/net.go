package net

import (
	"roller/db"
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

type RoomListMessage struct {
	Sender string   `json:"sender"`
	Room   string   `json:"room"`
	Data   []string `json:"data"`
}
