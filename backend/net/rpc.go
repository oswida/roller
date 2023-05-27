package net

import (
	"encoding/json"
	"roller/db"

	"github.com/centrifugal/centrifuge"
	badger "github.com/dgraph-io/badger/v4"
	"go.uber.org/zap"
)

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
	eng.Log.Debug("Updating room", zap.String("id", data.Data.Id))
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
	eng.Log.Debug("Deleting room", zap.String("id", data.Data.Id))
	return []byte{}, db.RoomDelete(dbase, data.Room)
}

func (eng *RollerEngine) RpcRoomList(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
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

func (eng *RollerEngine) RpcCsUpdate(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = db.RoomItemUpdate(dbase, data.Room, data.Data)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug("Updating charsheet", zap.String("id", data.Data.Id))
	return []byte{}, nil
}

func (eng *RollerEngine) RpcCsDelete(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return []byte{}, db.RoomItemDelete(dbase, data.Room, data.Data)
}

func (eng *RollerEngine) RpcCsList(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	list, err := db.RoomItemList[db.CsInfo](dbase, data.Room, data.Data)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (eng *RollerEngine) RpcRollList(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	list, err := db.RoomItemList[db.RollInfo](dbase, data.Room, data.Data)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (eng *RollerEngine) RpcRollClear(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return []byte{}, db.RoomItemClear[db.RollInfo](dbase, data.Room)
}
