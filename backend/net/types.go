package net

type LoginMessage struct {
	Username string `json:"username"`
	Passwd   string `json:"passwd"`
}

type UserCreateMessage struct {
	Username string `json:"name"`
	Passwd   string `json:"pass"`
	Passwd2  string `json:"repeatPass"`
}

// type RollMessage struct {
// 	Sender string      `json:"sender"`
// 	Room   string      `json:"room"`
// 	Data   db.RollInfo `json:"data"`
// }

// type RoomMessage struct {
// 	Sender string      `json:"sender"`
// 	Room   string      `json:"room"`
// 	Data   db.RoomInfo `json:"data"`
// }

// type ListMessage struct {
// 	Sender string   `json:"sender"`
// 	Room   string   `json:"room"`
// 	Data   []string `json:"data"`
// }

// type CsMessage struct {
// 	Sender string    `json:"sender"`
// 	Room   string    `json:"room"`
// 	Data   db.CsInfo `json:"data"`
// }

type MessageInterface interface{}

type Message[T MessageInterface] struct {
	Sender string `json:"sender"`
	Room   string `json:"room"`
	Data   T      `json:"data"`
}
