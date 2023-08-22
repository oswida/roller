package net

import (
	"context"
	"errors"
	"fmt"

	"rpgroll/db"
	"strings"
	"sync"

	"github.com/centrifugal/centrifuge"
	"go.uber.org/zap"
)

type Engine struct {
	Db   *db.DB
	Node *centrifuge.Node
	Log  *zap.Logger

	mux sync.Mutex
}

func NewEngine(dbase *db.DB, log *zap.Logger) (*Engine, error) {
	node, err := centrifuge.New(centrifuge.Config{})
	if err != nil {
		return nil, err
	}
	result := &Engine{
		Db:   dbase,
		Node: node,
		Log:  log,
	}

	node.OnConnecting(func(ctx context.Context, ce centrifuge.ConnectEvent) (centrifuge.ConnectReply, error) {
		user, err := result.Login(ce.Name, strings.ReplaceAll(string(ce.Data), "\"", ""))
		if err != nil {
			user = ""
		}
		if user != "" {
			cred := &centrifuge.Credentials{UserID: user}
			return centrifuge.ConnectReply{
				Credentials: cred,
				Data:        []byte(fmt.Sprintf("\"%s\"", user)),
			}, nil
		}
		return centrifuge.ConnectReply{}, errors.New("Rejected")
	})

	node.OnConnect(func(client *centrifuge.Client) {

		client.OnPresence(func(e centrifuge.PresenceEvent, cb centrifuge.PresenceCallback) {
			p, err := node.Presence(e.Channel)
			cb(centrifuge.PresenceReply{
				Result: &p}, err)
		})

		client.OnSubscribe(func(e centrifuge.SubscribeEvent, cb centrifuge.SubscribeCallback) {
			cb(centrifuge.SubscribeReply{
				Options: centrifuge.SubscribeOptions{
					EmitPresence:   true,
					EmitJoinLeave:  true,
					PushJoinLeave:  true,
					EnableRecovery: true,
				},
			}, nil)
		})

		client.OnPublish(func(e centrifuge.PublishEvent, cb centrifuge.PublishCallback) {
			result.PublishCallback(e, client)
			r, err := node.Publish(e.Channel, e.Data)
			if err != nil {
				result.Log.Error("publish error", zap.Error(err))
			}
			cb(centrifuge.PublishReply{Result: &r}, err)
		})

		client.OnRPC(func(e centrifuge.RPCEvent, cb centrifuge.RPCCallback) {
			r, err := result.RPCCallback(e, client)
			if err != nil {
				result.Log.Error("rpc error", zap.Error(err))
			}
			cb(centrifuge.RPCReply{Data: r}, err)
		})

		client.OnDisconnect(func(e centrifuge.DisconnectEvent) {

		})
	})

	return result, nil
}

func (eng *Engine) Run() error {
	if eng.Node == nil {
		return errors.New("centrifuge node not initialized")
	}
	return eng.Node.Run()
}

func (eng *Engine) PublishCallback(e centrifuge.PublishEvent, client *centrifuge.Client) {
	if strings.HasPrefix(e.Channel, "roll_info") {
		err := eng.RollPublishCallback(e)
		if err != nil {
			eng.Log.Error("roll publish callback", zap.Error(err))
		}
		return
	}
	if strings.HasPrefix(e.Channel, "cs_info") {
		err := eng.CsInfoPublishCallback(e)
		if err != nil {
			eng.Log.Error("cs info publish callback", zap.Error(err))
		}
		return
	}
	if strings.HasPrefix(e.Channel, "handout_info") {
		err := eng.HandoutInfoPublishCallback(e)
		if err != nil {
			eng.Log.Error("handout info publish callback", zap.Error(err))
		}
		return
	}
}

func (eng *Engine) RPCCallback(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	switch e.Method {
	case "room_update":
		return eng.RpcRoomUpdate(e, client)
	case "room_delete":
		return eng.RpcRoomDelete(e)
	case "room_list":
		return eng.RpcRoomList(e, client)
	case "cs_list":
		return eng.RpcCsList(e)
	case "cs_update":
		return eng.RpcCsUpdate(e)
	case "cs_delete":
		return eng.RpcCsDelete(e)
	case "roll_list":
		return eng.RpcRollList(e)
	case "roll_update":
		return eng.RpcRollUpdate(e)
	case "roll_clear":
		return eng.RpcRollClear(e)
	case "userinfo":
		return eng.RpcUserinfo(e, client)
	case "user_update":
		return eng.RpcUserUpdate(e, client)
	}
	return nil, nil
}
