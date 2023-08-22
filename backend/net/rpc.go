package net

import (
	"context"
	"encoding/json"
	"fmt"
	"rpgroll/db"
	"rpgroll/ent/room"

	"time"

	"github.com/centrifugal/centrifuge"
	"go.uber.org/zap"
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
	usr, err := eng.Db.Client.User.Get(context.Background(), client.UserID())
	if err != nil {
		return nil, err
	}
	usr.Passwd = "" // clear for transport
	return json.Marshal(usr)
}

type UserUpdateData struct {
	Name     string
	Color    string
	Settings map[string]any
}

func (eng *Engine) RpcUserUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	var data UserUpdateData
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}
	err = eng.Db.Client.User.
		UpdateOneID(client.UserID()).
		SetName(data.Name).
		SetColor(data.Color).
		SetSettings(data.Settings).Exec(context.Background())
	if err != nil {
		return nil, err
	}
	usr, err := eng.Db.Client.User.Get(context.Background(), client.UserID())
	if err != nil {
		return nil, err
	}
	return json.Marshal(usr)
}

func (eng *Engine) RpcRoomUpdate(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RoomMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	room, _ := eng.Db.Client.Room.Get(context.Background(), data.Room)
	if room == nil {
		err := eng.Db.Client.Room.Create().
			SetID(data.Room).
			SetName(data.Data.Name).
			SetBkg(data.Data.Bkguri).
			SetOwnerID(client.UserID()).Exec(context.Background())
		if err != nil {
			fmt.Printf("%v", err)
			return nil, err
		}
	} else {
		err := eng.Db.Client.Room.UpdateOneID(data.Room).
			SetName(data.Data.Name).
			SetBkg(data.Data.Bkguri).
			SetOwnerID(client.UserID()).Exec(context.Background())
		if err != nil {
			fmt.Printf("%v", err)
			return nil, err
		}
	}
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
	_ = eng.Db.Client.Room.DeleteOneID(data.Data.Id).Exec(context.Background())
	return []byte{}, nil
}

func (eng *Engine) RpcRoomList(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ListMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return nil, err
	}

	rooms, err := eng.Db.Client.Room.Query().Where(room.IDIn(data.Data...)).All(context.Background())
	fmt.Printf("rooms %v", rooms)
	if err != nil {
		return nil, err
	}
	bytes, err := json.Marshal(rooms)
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
