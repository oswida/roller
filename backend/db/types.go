package db

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
	Portrait string         `json:"portraitUrl,omitempty"`
}

type UserUpdateData struct {
	Name     string         `json:"name"`
	Color    string         `json:"color"`
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
