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

type BoardMessage struct {
	Sender string       `json:"sender"`
	Room   string       `json:"room"`
	Data   db.BoardInfo `json:"data"`
}

type ObjectMessage struct {
	Sender string         `json:"sender"`
	Room   string         `json:"room"`
	Data   db.BoardObject `json:"data"`
	Delete bool           `json:"delete"`
}
