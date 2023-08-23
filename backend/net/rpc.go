package net

import (
	"encoding/json"
	"rpgroll/db"

	"github.com/centrifugal/centrifuge"
)

func (eng *Engine) Login(username, passwd string) (string, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	u, err := eng.Db.Login(username, passwd)
	if err != nil {
		return "", err
	}
	return u.ID, nil
}

func (eng *Engine) RpcUserinfo(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	return eng.Db.UserGet(client.UserID(), true)
}

func (eng *Engine) RpcUserUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	var data db.UserUpdateData
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.UserUpdate(client.UserID(), data)
}

func (eng *Engine) RpcRoomUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RoomUpdate(client.UserID(), data.Room, data.Data)
}

func (eng *Engine) RpcRoomDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RoomDelete(data.Room)
}

func (eng *Engine) RpcRoomList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.RoomList(data.Data)
}

func (eng *Engine) RpcCsUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.CsUpdate(client.UserID(), data.Data)
}

func (eng *Engine) RpcCsDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.CsDelete(data.Data.Id)
}

func (eng *Engine) RpcCsList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	return eng.Db.CsList(client.UserID())
}

func (eng *Engine) RpcRollUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RollMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollUpdate(client.UserID(), data.Room, data.Data)
}

func (eng *Engine) RpcRollList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.RollList(data.Room)
}

func (eng *Engine) RpcRollClear(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollClear(data.Room)
}
