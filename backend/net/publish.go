package net

import (
	"encoding/json"
	"rpgroll/db"

	"github.com/centrifugal/centrifuge"
	"github.com/google/uuid"
)

func (eng *Server) RollPublishCallback(e centrifuge.PublishEvent, client *centrifuge.Client) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.RollInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}

	_, err = eng.Db.RollUpdate(uuid.MustParse(client.UserID()), data.Room, data.Data)

	return err
}

func (eng *Server) CsInfoPublishCallback(e centrifuge.PublishEvent, client *centrifuge.Client) error {
	eng.mux.Lock()
	defer eng.mux.Unlock()

	var data Message[db.CsInfo]
	err := json.Unmarshal(e.Data, &data)
	if err != nil {
		return err
	}

	_, err = eng.Db.CsUpdate(client.UserID(), data.Data)
	return err
}
