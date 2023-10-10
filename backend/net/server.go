package net

import (
	"context"
	"embed"
	"fmt"
	"io/fs"
	"net/http"

	"rpgroll/db"
	"strings"
	"sync"

	"github.com/centrifugal/centrifuge"
	"github.com/google/uuid"
	"github.com/knadh/koanf/v2"
	"go.uber.org/zap"
)

type Server struct {
	Db   *db.Database
	Node *centrifuge.Node

	mux    sync.Mutex
	config *koanf.Koanf
	log    *zap.Logger
	efs    embed.FS
}

func NewServer(dbase *db.Database, log *zap.Logger, cfg *koanf.Koanf, efs embed.FS) (*Server, error) {
	node, err := centrifuge.New(centrifuge.Config{})
	if err != nil {
		return nil, err
	}
	result := &Server{
		Db:     dbase,
		Node:   node,
		log:    log,
		config: cfg,
		efs:    efs,
	}

	node.OnConnecting(func(ctx context.Context, ce centrifuge.ConnectEvent) (centrifuge.ConnectReply, error) {
		token, err := ParseJwt([]byte(cfg.String("web.jwt_secret")), ce.Token)
		if err != nil {
			result.log.Error("error parsing jwt token", zap.Error(err))
			return centrifuge.ConnectReply{}, err
		}
		bytes, err := result.Db.UserGet(uuid.MustParse(token.ID), true)
		if err != nil {
			result.log.Error("error getting user", zap.Error(err))
			return centrifuge.ConnectReply{}, err
		}
		return centrifuge.ConnectReply{
			Credentials: &centrifuge.Credentials{
				UserID:   token.ID,
				ExpireAt: token.ExpiresAt.Unix(),
			},
			Data: bytes,
		}, nil
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
				result.log.Error("publish error", zap.Error(err))
			}
			cb(centrifuge.PublishReply{Result: &r}, err)
		})

		client.OnRPC(func(e centrifuge.RPCEvent, cb centrifuge.RPCCallback) {
			r, err := result.RPCCallback(e, client)
			if err != nil {
				result.log.Error("rpc error", zap.String("method", e.Method), zap.Error(err))
			}
			cb(centrifuge.RPCReply{Data: r}, err)
		})

		client.OnDisconnect(func(e centrifuge.DisconnectEvent) {

		})

	})

	return result, nil
}

func (eng *Server) Run() error {

	if err := eng.Node.Run(); err != nil {
		eng.log.Error("starting centrifuge engine failed", zap.Error(err))
		return err
	}

	wsHandler := centrifuge.NewWebsocketHandler(eng.Node, centrifuge.WebsocketConfig{
		CheckOrigin: func(r *http.Request) bool { return true },
	})

	http.Handle("/centrifuge", wsHandler)
	subfs, err := fs.Sub(eng.efs, "resources/web")
	if err != nil {
		eng.log.Error("cannot create embedded subsystem for web server", zap.Error(err))
		return err
	}
	http.Handle("/login", LoginHandler(eng.Db, eng.config, eng.log))
	http.Handle("/", http.FileServer(http.FS(subfs)))

	eng.log.Info("Starting roller")
	if err := http.ListenAndServe(fmt.Sprintf(":%d", eng.config.Int("server.port")), nil); err != nil {
		eng.log.Fatal("failed starting web server", zap.Error(err))
		return err
	}

	return nil
}

func (s *Server) Stop() {
	s.log.Info("shutting down server")
	s.Node.Shutdown(context.Background())
}

func (eng *Server) PublishCallback(e centrifuge.PublishEvent, client *centrifuge.Client) {
	if strings.HasPrefix(e.Channel, "roll_info") {
		err := eng.RollPublishCallback(e, client)
		if err != nil {
			eng.log.Error("roll publish callback", zap.Error(err))
		}
		return
	}
	if strings.HasPrefix(e.Channel, "cs_info") {
		err := eng.CsInfoPublishCallback(e, client)
		if err != nil {
			eng.log.Error("cs info publish callback", zap.Error(err))
		}
		return
	}

}

func (eng *Server) RPCCallback(e centrifuge.RPCEvent, client *centrifuge.Client) ([]byte, error) {
	switch e.Method {
	case "room_update":
		return eng.RpcRoomUpdate(e, client)
	case "room_delete":
		return eng.RpcRoomDelete(e)
	case "room_list":
		return eng.RpcRoomList(e, client)
	case "cs_list":
		return eng.RpcCsList(e, client)
	case "cs_update":
		return eng.RpcCsUpdate(e, client)
	case "cs_delete":
		return eng.RpcCsDelete(e)
	case "roll_list":
		return eng.RpcRollList(e)
	case "roll_update":
		return eng.RpcRollUpdate(e, client)
	case "roll_clear":
		return eng.RpcRollClear(e)
	case "userinfo":
		return eng.RpcUserinfo(e, client)
	case "user_update":
		return eng.RpcUserUpdate(e, client)
	case "user_create":
		return eng.RpcUserCreate(e, client)
	case "user_passwd":
		return eng.RpcUserChangePasswd(e, client)
	}
	return nil, nil
}
