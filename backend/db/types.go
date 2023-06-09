package db

import "encoding/json"

type Item interface {
	GetId() string
	Unmarshal(data []byte) (Item, error)
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

func (info RollInfo) Unmarshal(data []byte) (Item, error) {
	var r RollInfo
	err := json.Unmarshal(data, &r)
	return r, err
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

func (info CsInfo) Unmarshal(data []byte) (Item, error) {
	var r CsInfo
	err := json.Unmarshal(data, &r)
	return r, err
}

const (
	ItemPrefixCs   = "cs"
	ItemPrefixRoll = "roll"
)
