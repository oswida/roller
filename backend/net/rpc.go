package net

import (
	"encoding/json"
	"rpgroll/db"

	"github.com/centrifugal/centrifuge"
	"go.uber.org/zap"
)

func (eng *Engine) RpcRoomUpdate(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = eng.Db.RoomUpdate(data.Data)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug("Updating room", zap.String("id", data.Data.Id))
	return []byte{}, nil
}

func (eng *Engine) RpcRoomDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug("Deleting room", zap.String("id", data.Data.Id))
	return []byte{}, eng.Db.RoomDelete(data.Room)
}

func (eng *Engine) RpcRoomList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	list, err := eng.Db.RoomList(data.Data)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (eng *Engine) RpcCsUpdate(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = eng.Db.ItemUpdate(db.ItemPrefixCs, data.Sender, data.Data)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug("Updating charsheet", zap.String("id", data.Data.Id))
	return []byte{}, nil
}

func (eng *Engine) RpcCsDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return []byte{}, eng.Db.ItemDelete(db.ItemPrefixCs, data.Sender, data.Data)
}

func (eng *Engine) RpcCsList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	var charsheet db.CsInfo
	list, err := eng.Db.ItemList(db.ItemPrefixCs, data.Sender, data.Data, charsheet)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (eng *Engine) RpcRollList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	var roll db.RollInfo
	list, err := eng.Db.ItemList(db.ItemPrefixRoll, data.Room, data.Data, roll)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (eng *Engine) RpcRollClear(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return []byte{}, eng.Db.ItemClear(db.ItemPrefixRoll, data.Room)
}
