package db

type Identifable interface {
	GetId() string
}

type RollInfo struct {
	Id            string `json:"id"`
	UserId        string `json:"userId"`
	User          string `json:"user"`
	UserColor     string `json:"userColor"`
	Tstamp        string `json:"tstamp"`
	Realtstamp    int    `json:"realtstamp,omitempty"`
	Result        string `json:"result"`
	DiceColor     string `json:"diceColor"`
	DiceMaterial  string `json:"diceMaterial,omitempty"`
	Comment       string `json:"comment,omitempty"`
	SuccessRule   string `json:"successRule,omitempty"`
	SuccessTarget int    `json:"successTarget,omitempty"`
	Private       bool   `json:"private,omitempty"`
	Revealed      bool   `json:"revealed,omitempty"`
}

func (info RollInfo) GetId() string {
	return info.Id
}

type RoomInfo struct {
	Id     string `json:"id"`
	Name   string `json:"name"`
	Owner  string `json:"owner"`
	Bkguri string `json:"bkguri"`
}

type CsInfo struct {
	Id       string         `json:"id"`
	Name     string         `json:"name"`
	Owner    string         `json:"owner"`
	Template string         `json:"template"`
	Values   map[string]any `json:"values"`
	Shared   bool           `json:"shared,omitempty"`
}

func (info CsInfo) GetId() string {
	return info.Id
}

type BoardInfo struct {
	Id     string `json:"id"`
	Name   string `json:"name"`
	Owner  string `json:"owner"`
	Bkguri string `json:"bkguri"`
	Shared bool   `json:"shared,omitempty"`
}

func (info BoardInfo) GetId() string {
	return info.Id
}

type BoardObject struct {
	Id      string `json:"id"`
	BoardId string `json:"board"`
	Owner   string `json:"owner"`
	Data    string `json:"data"`
}

func (info BoardObject) GetId() string {
	return info.Id
}
