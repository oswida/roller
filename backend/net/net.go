package net

import (
	"log"
	"roller/db"
	"time"

	"github.com/centrifugal/centrifuge"
	badger "github.com/dgraph-io/badger/v4"
)

type RollMessage struct {
	Sender string      `json:"sender"`
	Room   string      `json:"room"`
	Data   db.RollInfo `json:"data"`
}

type RoomMessage struct {
	Sender string      `json:"sender"`
	Room   string      `json:"room"`
	Data   db.RoomInfo `json:"data"`
}

type RoomListMessage struct {
	Sender string   `json:"sender"`
	Room   string   `json:"room"`
	Data   []string `json:"data"`
}

func NewCentrifugeNode(dbase *badger.DB) (*centrifuge.Node, error) {
	node, err := centrifuge.New(centrifuge.Config{})
	if err != nil {
		return nil, err
	}

	node.OnConnect(func(client *centrifuge.Client) {
		transportName := client.Transport().Name()
		transportProto := client.Transport().Protocol()
		log.Printf("client connected via %s (%s)", transportName, transportProto)

		client.OnSubscribe(func(e centrifuge.SubscribeEvent, cb centrifuge.SubscribeCallback) {
			cb(centrifuge.SubscribeReply{}, nil)
		})

		client.OnPublish(func(e centrifuge.PublishEvent, cb centrifuge.PublishCallback) {
			ServerPublishCallback(dbase, e)
			result, err := node.Publish(
				e.Channel, e.Data,
				centrifuge.WithHistory(100, 120*time.Second),
				centrifuge.WithClientInfo(e.ClientInfo),
			)
			cb(centrifuge.PublishReply{Result: &result}, err)
		})

		client.OnRPC(func(e centrifuge.RPCEvent, cb centrifuge.RPCCallback) {
			result, err := ServerRPCCallback(dbase, e)
			if err != nil {
				log.Printf("rpc error %v %v", e.Method, err)
			}
			cb(centrifuge.RPCReply{Data: result}, err)
		})

		client.OnDisconnect(func(e centrifuge.DisconnectEvent) {
			log.Printf("client disconnected")
		})
	})

	return node, nil
}

func ServerPublishCallback(dbase *badger.DB, e centrifuge.PublishEvent) {
	switch e.Channel {
	case "roll_info":
		err := RollPublishCallback(dbase, e)
		if err != nil {
			log.Printf("%v", err)
		}
	}
}

func ServerRPCCallback(dbase *badger.DB, e centrifuge.RPCEvent) ([]byte, error) {
	switch e.Method {
	case "room_create":
		return RpcRoomCreate(dbase, e)
	case "room_update":
		return RpcRoomUpdate(dbase, e)
	case "room_delete":
		return RpcRoomDelete(dbase, e)
	case "room_list":
		return RpcRoomList(dbase, e)
	}
	return nil, nil
}
