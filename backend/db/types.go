package db

type RollDetail struct {
	Type   string `json:"type"`
	Sides  int    `json:"sides"`
	Id     int    `json:"id"`
	Value  int    `json:"value"`
	Label  string `json:"label"`
	Reason string `json:"reason"`
}

type RollSet struct {
	Num   int          `json:"num"`
	Type  string       `json:"type"`
	Sides int          `json:"sides"`
	Rolls []RollDetail `json:"rolls"`
	Total int          `json:"total"`
}

type RollResult struct {
	Notation string    `json:"notation"`
	Sets     []RollSet `json:"sets"`
	Modifier int       `json:"modifier"`
	Total    int       `json:"total"`
}

type RollInfo struct {
	User         string     `json:"user"`
	UserColor    string     `json:"userColor"`
	Tstamp       string     `json:"tstamp"`
	Realtstamp   int        `json:"realtstamp"`
	Result       RollResult `json:"result"`
	DiceColor    string     `json:"diceColor"`
	DiceMaterial string     `json:"diceMaterial,omitempty"`
	Comment      string     `json:"comment,omitempty"`
	SuccessRule  string     `json:"successRule,omitempty"`
}

type RoomInfo struct {
	Id     string     `json:"id"`
	Name   string     `json:"name"`
	Owner  string     `json:"owner"`
	Bkguri string     `json:"bkguri"`
	Rolls  []RollInfo `json:"rolls"`
}
