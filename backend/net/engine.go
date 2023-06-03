package net

import (
	"errors"
	"sync"

	"github.com/centrifugal/centrifuge"
	badger "github.com/dgraph-io/badger/v4"
	"go.uber.org/zap"
)

type RollerEngine struct {
	DB   *badger.DB
	Node *centrifuge.Node
	Log  *zap.Logger

	mux sync.Mutex
}

func NewRollerEngine(dbase *badger.DB, log *zap.Logger) (*RollerEngine, error) {
	node, err := centrifuge.New(centrifuge.Config{})
	if err != nil {
		return nil, err
	}
	result := &RollerEngine{
		DB:   dbase,
		Node: node,
		Log:  log,
	}

	node.OnConnect(func(client *centrifuge.Client) {

		client.OnPresence(func(e centrifuge.PresenceEvent, cb centrifuge.PresenceCallback) {
			p, err := node.Presence(e.Channel)
			cb(centrifuge.PresenceReply{
				Result: &p}, err)
		})

		client.OnSubscribe(func(e centrifuge.SubscribeEvent, cb centrifuge.SubscribeCallback) {
			cb(centrifuge.SubscribeReply{}, nil)
		})

		client.OnPublish(func(e centrifuge.PublishEvent, cb centrifuge.PublishCallback) {
			result.PublishCallback(e)
			r, err := node.Publish(e.Channel, e.Data)
			if err != nil {
				result.Log.Error("publish error", zap.Error(err))
			}
			cb(centrifuge.PublishReply{Result: &r}, err)
		})

		client.OnRPC(func(e centrifuge.RPCEvent, cb centrifuge.RPCCallback) {
			r, err := result.RPCCallback(dbase, e)
			if err != nil {
				result.Log.Error("rpc error", zap.Error(err))
			}
			cb(centrifuge.RPCReply{Data: r}, err)
		})

		client.OnDisconnect(func(e centrifuge.DisconnectEvent) {
			//result.Log.Info("client disconnected", zap.String("reason", e.Reason), zap.String("err", e.String()))
		})
	})

	return result, nil
}

func (eng *RollerEngine) Run() error {
	if eng.Node == nil {
		return errors.New("centrifuge node not initialized")
	}
	return eng.Node.Run()
}

func (eng *RollerEngine) PublishCallback(e centrifuge.PublishEvent) {
	switch e.Channel {
	case "roll_info":
		err := eng.RollPublishCallback(e)
		if err != nil {
			eng.Log.Error("roll publish callback", zap.Error(err))
		}
	case "cs_info":
		err := eng.CsInfoPublishCallback(e)
		if err != nil {
			eng.Log.Error("cs info publish callback", zap.Error(err))
		}
	}
}

func (eng *RollerEngine) RPCCallback(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	switch e.Method {
	case "room_update":
		return eng.RpcRoomUpdate(dbase, e)
	case "room_delete":
		return eng.RpcRoomDelete(dbase, e)
	case "room_list":
		return eng.RpcRoomList(dbase, e)
	case "cs_list":
		return eng.RpcCsList(dbase, e)
	case "cs_update":
		return eng.RpcCsUpdate(dbase, e)
	case "cs_delete":
		return eng.RpcCsDelete(dbase, e)
	case "roll_list":
		return eng.RpcRollList(dbase, e)
	case "roll_clear":
		return eng.RpcRollClear(dbase, e)
	}
	return nil, nil
}
