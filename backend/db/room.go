package db

import (
	"context"
	"encoding/json"
	"fmt"
	"rpgroll/ent"
	"rpgroll/ent/room"

	"github.com/google/uuid"
	"go.uber.org/zap"
)

// Rooms

func (d *Database) RoomUpdate(userID uuid.UUID, roomID uuid.UUID, data RoomInfo) ([]byte, error) {
	room, _ := d.Client.Room.Get(context.Background(), roomID)
	if room == nil {
		err := d.Client.Room.Create().
			SetID(roomID).
			SetName(data.Name).
			SetBkg(data.Bkguri).
			SetOwnerID(userID).Exec(context.Background())
		if err != nil {
			return nil, err
		}
	} else {
		err := d.Client.Room.UpdateOneID(roomID).
			SetName(data.Name).
			SetBkg(data.Bkguri).
			SetOwnerID(userID).Exec(context.Background())
		if err != nil {
			return nil, err
		}
	}
	room, err := d.Client.Room.Get(context.Background(), roomID)
	if err != nil {
		return nil, err
	}
	return json.Marshal(room)
}

func (d *Database) RoomDelete(roomID uuid.UUID) ([]byte, error) {
	err := d.Client.Room.DeleteOneID(roomID).Exec(context.Background())
	if err != nil {
		d.Log.Error("RoomDelete", zap.Error(err))
		return nil, err
	}
	//TODO: remove room from user settings
	return []byte{}, nil
}

func (d *Database) RoomList(userID uuid.UUID) ([]byte, error) {
	usr, err := d.Client.User.Get(context.Background(), userID)
	if err != nil {
		return nil, err
	}
	if _, ok := usr.Settings["rooms"]; !ok {
		list := []uuid.UUID{}
		return json.Marshal(list)
	}
	idents := []uuid.UUID{}
	for _, id := range usr.Settings["rooms"].([]interface{}) {
		idents = append(idents, uuid.MustParse(fmt.Sprintf("%v", id)))
	}
	rooms, err := d.Client.Room.Query().
		Where(room.IDIn(idents...)).
		WithOwner(func(uq *ent.UserQuery) { uq.FirstID(context.Background()) }).
		All(context.Background())
	if err != nil {
		return nil, err
	}
	return json.Marshal(rooms)
}
