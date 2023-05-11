package net

import (
	"encoding/json"
	"roller/db"

	"github.com/centrifugal/centrifuge"
	badger "github.com/dgraph-io/badger/v4"
	"go.uber.org/zap"
)

func (eng *RollerEngine) RpcRoomCreate(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = db.RoomUpdate(dbase, data.Data.Id, data.Data)
	if err != nil {
		return nil, err
	}
	eng.Log.Info("Creating room", zap.String("id", data.Data.Id))
	return []byte{}, nil
}

func (eng *RollerEngine) RpcRoomUpdate(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = db.RoomUpdate(dbase, data.Data.Id, data.Data)
	if err != nil {
		return nil, err
	}
	eng.Log.Info("Updating room", zap.String("id", data.Data.Id))
	return []byte{}, nil
}

func (eng *RollerEngine) RpcRoomDelete(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	eng.Log.Info("Deleting room", zap.String("id", data.Data.Id))
	return []byte{}, db.RoomDelete(dbase, data.Room)
}

func (eng *RollerEngine) RpcRoomList(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

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
