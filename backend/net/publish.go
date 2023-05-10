package net

import (
	"encoding/json"
	"roller/db"

	"github.com/centrifugal/centrifuge"
	badger "github.com/dgraph-io/badger/v4"
)

func RollPublishCallback(dbase *badger.DB, e centrifuge.PublishEvent) error {
	var data RollMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}
	room, err := db.RoomGet(dbase, data.Room)
	if err != nil {
		return err
	}
	newRolls := []db.RollInfo{data.Data}
	newRolls = append(newRolls, room.Rolls...)
	room.Rolls = newRolls
	return db.RoomUpdate(dbase, room.Id, room)
}
