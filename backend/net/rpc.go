package net

import (
	"encoding/json"
	"rpgroll/db"

	"github.com/centrifugal/centrifuge"
)

func (eng *Engine) Login(username, passwd string) (string, string, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	u, err := eng.Db.Login(username, passwd)
	if err != nil {
		return "", "", err
	}
	return u.ID, u.Name, nil
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

	var data Message[db.RoomInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RoomUpdate(client.UserID(), data.Room, data.Data)
}

func (eng *Engine) RpcRoomDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RoomInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RoomDelete(data.Room)
}

func (eng *Engine) RpcRoomList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[[]string]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.RoomList(data.Data)
}

func (eng *Engine) RpcCsUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.CsInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.CsUpdate(client.UserID(), data.Data)
}

func (eng *Engine) RpcCsDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.CsInfo]
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

	var data Message[db.RollInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollUpdate(client.UserID(), data.Room, data.Data)
}

func (eng *Engine) RpcRollList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[[]string]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.RollList(data.Room)
}

func (eng *Engine) RpcRollClear(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[[]string]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollClear(data.Room)
}

func (eng *Engine) RpcRollDefList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()
	return eng.Db.RollDefList(client.UserID())
}

func (eng *Engine) RpcRollDefUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RollDefInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollDefUpdate(client.UserID(), data.Data)
}

func (eng *Engine) RpcRollDefDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RollDefInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollDefDelete(data.Data.ID)
}

func (eng *Engine) RpcUserCreate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data UserCreateMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.UserCreate(data.Username, data.Passwd)
}
