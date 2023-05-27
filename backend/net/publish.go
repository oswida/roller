package net

import (
	"encoding/json"
	"roller/db"
	"time"

	"github.com/centrifugal/centrifuge"
)

func (eng *RollerEngine) RollPublishCallback(e centrifuge.PublishEvent) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RollMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}
	data.Data.Realtstamp = int(time.Now().UnixMilli())
	return db.RoomItemUpdate(eng.DB, data.Room, data.Data)
}

func (eng *RollerEngine) CsInfoPublishCallback(e centrifuge.PublishEvent) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}
	if data.Data.Shared {
		return db.RoomItemUpdate(eng.DB, data.Room, data.Data)
	} else {
		// delete if shared has been switched off
		return db.RoomItemDelete(eng.DB, data.Room, data.Data)
	}
}

func (eng *RollerEngine) BoardInfoPublishCallback(e centrifuge.PublishEvent) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data BoardMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}
	if data.Data.Shared {
		return db.RoomItemUpdate(eng.DB, data.Room, data.Data)
	} else {
		// delete if shared has been switched off
		return db.RoomItemDelete(eng.DB, data.Room, data.Data)
	}
}

func (eng *RollerEngine) ObjectInfoPublishCallback(e centrifuge.PublishEvent) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data ObjectMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}
	if !data.Delete {
		return db.RoomItemUpdate(eng.DB, data.Room, data.Data)
	} else {
		return db.RoomItemDelete(eng.DB, data.Room, data.Data)
	}
}
