package net

import (
	"encoding/json"

	"github.com/centrifugal/centrifuge"
)

func (eng *Engine) RollPublishCallback(e centrifuge.PublishEvent, client *centrifuge.Client) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data RollMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}

	_, err = eng.Db.RollUpdate(client.UserID(), data.Room, data.Data)

	return err
}

func (eng *Engine) CsInfoPublishCallback(e centrifuge.PublishEvent, client *centrifuge.Client) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data CsMessage
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}

	_, err = eng.Db.CsUpdate(client.UserID(), data.Data)
	return err
}
