package net

import (
	"encoding/json"
	"rpgroll/db"
	"time"

	"github.com/centrifugal/centrifuge"
)

func (eng *Engine) RollPublishCallback(e centrifuge.PublishEvent) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RollMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}
	data.Data.Realtstamp = int(time.Now().UnixMilli())
	return eng.Db.ItemUpdate(db.ItemPrefixRoll, data.Room, data.Data)
}

func (eng *Engine) CsInfoPublishCallback(e centrifuge.PublishEvent) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}
	if data.Data.Shared {
		return eng.Db.ItemUpdate(db.ItemPrefixCs, data.Sender, data.Data)
	} else {
		// delete if shared has been switched off
		return eng.Db.ItemDelete(db.ItemPrefixCs, data.Sender, data.Data)
	}
}
