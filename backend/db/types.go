package db

type RollInfo struct {
	User         string           `json:"user"`
	UserColor    string           `json:"userColor"`
	Tstamp       string           `json:"tstamp"`
	Realtstamp   int              `json:"realtstamp"`
	RollTotal    int              `json:"rollTotal"`
	RollDice     []string         `json:"rollDice"`
	RollResults  map[string][]int `json:"rollResults"`
	DiceColor    string           `json:"diceColor"`
	DiceMaterial string           `json:"diceMaterial"`
	Comment      string           `json:"comment"`
}

type RoomInfo struct {
	Id     string     `json:"id"`
	Name   string     `json:"name"`
	Owner  string     `json:"owner"`
	Bkguri string     `json:"bkguri"`
	Rolls  []RollInfo `json:"rolls"`
}
