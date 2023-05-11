package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"roller/db"
	"roller/net"
	"syscall"

	"github.com/centrifugal/centrifuge"
	"go.uber.org/zap"
)

func auth(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		cred := &centrifuge.Credentials{
			UserID: "",
		}
		newCtx := centrifuge.SetCredentials(ctx, cred)
		r = r.WithContext(newCtx)
		h.ServeHTTP(w, r)
	})
}

func main() {

	logcfg := zap.NewProductionConfig()
	logcfg.OutputPaths = []string{"roller.log"}
	logger, err := logcfg.Build()
	if err != nil {
		panic(err)
	}

	dbase, err := db.InitDatabase()
	if err != nil {
		panic(err)
	}

	engine, err := net.NewRollerEngine(dbase, logger)
	if err != nil {
		panic(err)
	}

	if err := engine.Run(); err != nil {
		log.Fatal(err)
	}

	wsHandler := centrifuge.NewWebsocketHandler(engine.Node, centrifuge.WebsocketConfig{
		CheckOrigin: func(r *http.Request) bool { return true },
	})
	http.Handle("/connection/websocket", auth(wsHandler))

	http.Handle("/", http.FileServer(http.Dir("./frontend")))

	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		db.CloseDatabase(dbase)
		os.Exit(1)
	}()

	logger.Info("Starting server, visit http://localhost:5000")
	if err := http.ListenAndServe(":5000", nil); err != nil {
		log.Fatal(err)
	}
}
