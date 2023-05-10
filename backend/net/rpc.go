package net

import (
	"encoding/json"
	"log"
	"roller/db"

	"github.com/centrifugal/centrifuge"
	badger "github.com/dgraph-io/badger/v4"
)

func RpcRoomCreate(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = db.RoomUpdate(dbase, data.Data.Id, data.Data)
	if err != nil {
		return nil, err
	}
	log.Printf("Creating room %v", data.Data.Id)
	return []byte{}, nil
}

func RpcRoomUpdate(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = db.RoomUpdate(dbase, data.Data.Id, data.Data)
	if err != nil {
		return nil, err
	}
	log.Printf("Updating room %v", data.Data.Id)
	return []byte{}, nil
}

func RpcRoomDelete(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	log.Printf("Deleting room %v", data.Data.Id)
	return []byte{}, db.RoomDelete(dbase, data.Room)
}

func RpcRoomList(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	var data RoomListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	list, err := db.RoomList(dbase, data.Data)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}
