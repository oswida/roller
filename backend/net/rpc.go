package net

import (
	"encoding/json"
	"fmt"
	"rpgroll/db"
	"time"

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
	err = eng.Db.ItemUpdate(db.ItemPrefixCs, data.Room, data.Data)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug("Updating charsheet", zap.String("room", data.Room), zap.String("id", data.Data.Id))
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
	return []byte{}, eng.Db.ItemDelete(db.ItemPrefixCs, data.Room, data.Data)
}

func (eng *Engine) RpcCsList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	charsheet := db.CsInfo{}
	eng.Log.Debug(fmt.Sprintf("CS list load %v, %v", data.Room, data.Data))
	list, err := eng.Db.ItemList(db.ItemPrefixCs, data.Room, []string{}, charsheet)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug(fmt.Sprintf("CS list %v", list))
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}

func (eng *Engine) RpcRollUpdate(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RollMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	data.Data.Realtstamp = int(time.Now().UnixMilli())
	return nil, eng.Db.ItemUpdate(db.ItemPrefixRoll, data.Room, data.Data)
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

// Handouts

func (eng *Engine) RpcHandoutUpdate(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data HandoutMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = eng.Db.ItemUpdate(db.ItemPrefixHandout, data.Room, data.Data)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug("Updating handout", zap.String("room", data.Room), zap.String("id", data.Data.Id))
	return []byte{}, nil
}

func (eng *Engine) RpcHandoutDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data HandoutMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return []byte{}, eng.Db.ItemDelete(db.ItemPrefixHandout, data.Room, data.Data)
}

func (eng *Engine) RpcHandoutList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	charsheet := db.HandoutInfo{}
	eng.Log.Debug(fmt.Sprintf("Handout list load %v, %v", data.Room, data.Data))
	list, err := eng.Db.ItemList(db.ItemPrefixHandout, data.Room, []string{}, charsheet)
	if err != nil {
		return nil, err
	}
	eng.Log.Debug(fmt.Sprintf("Handout list %v", list))
	bytes, err := json.Marshal(list)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}
