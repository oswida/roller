package net

import (
	"encoding/json"
	"rpgroll/db"

	"github.com/centrifugal/centrifuge"
	"github.com/google/uuid"
)

func (eng *Server) RpcUserinfo(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	return eng.Db.UserGet(uuid.MustParse(client.UserID()), true)
}

func (eng *Server) RpcUserUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	var data db.UserUpdateData
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.UserUpdate(uuid.MustParse(client.UserID()), data)
}

func (eng *Server) RpcRoomUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RoomInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RoomUpdate(uuid.MustParse(client.UserID()), data.Room, data.Data)
}

func (eng *Server) RpcRoomDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RoomInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RoomDelete(data.Room)
}

func (eng *Server) RpcRoomList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[[]uuid.UUID]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.RoomList(data.Sender)
}

func (eng *Server) RpcCsUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.CsInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.CsUpdate(client.UserID(), data.Data)
}

func (eng *Server) RpcCsDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.CsInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.CsDelete(data.Data.Id)
}

func (eng *Server) RpcCsList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()
	return eng.Db.CsList(uuid.MustParse(client.UserID()))
}

func (eng *Server) RpcRollUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RollInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollUpdate(uuid.MustParse(client.UserID()), data.Room, data.Data)
}

func (eng *Server) RpcRollList(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[[]string]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.RollList(data.Room)
}

func (eng *Server) RpcRollClear(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[[]string]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollClear(data.Room)
}

func (eng *Server) RpcRollDefList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()
	return eng.Db.RollDefList(uuid.MustParse(client.UserID()))
}

func (eng *Server) RpcRollDefUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RollDefInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollDefUpdate(uuid.MustParse(client.UserID()), data.Data)
}

func (eng *Server) RpcRollDefDelete(e centrifuge.RPCEvent) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RollDefInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	return eng.Db.RollDefDelete(data.Data.ID)
}

func (eng *Server) RpcUserCreate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data UserCreateMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	return eng.Db.UserCreate(data.Username, data.Passwd)
}
