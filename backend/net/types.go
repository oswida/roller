package net

import "github.com/google/uuid"

type LoginMessage struct {
	Username string `json:"username"`
	Passwd   string `json:"passwd"`
}

type UserCreateMessage struct {
	Username string `json:"name"`
	Passwd   string `json:"pass"`
	Passwd2  string `json:"repeatPass"`
}

type MessageInterface interface{}

type Message[T MessageInterface] struct {
	Sender uuid.UUID `json:"sender"`
	Room   uuid.UUID `json:"room"`
	Data   T         `json:"data"`
}
