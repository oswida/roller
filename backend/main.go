package main

import (
	"net/http"
	"os"
	"os/signal"
	"rpgroll/db"
	"rpgroll/net"
	"syscall"

	"github.com/centrifugal/centrifuge"
	"go.uber.org/zap"
)

func auth(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		h.ServeHTTP(w, r)
	})
}

func main() {
	logcfg := zap.NewProductionConfig()
	logcfg.OutputPaths = []string{"rpgroll.log"}

	logger, err := logcfg.Build()
	if err != nil {
		panic(err)
	}

	dbase, err := db.NewDatabase()
	if err != nil {
		panic(err)
	}

	engine, err := net.NewEngine(dbase, logger)
	if err != nil {
		panic(err)
	}

	if err := engine.Run(); err != nil {
		logger.Fatal("starting centrifuge engine failed", zap.Error(err))
	}

	wsHandler := centrifuge.NewWebsocketHandler(engine.Node, centrifuge.WebsocketConfig{
		CheckOrigin: func(r *http.Request) bool { return true },
	})

	http.Handle("/connection/websocket", auth(wsHandler))
	http.Handle("/", http.FileServer(http.Dir("./fnd")))

	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		dbase.Close()
		os.Exit(1)
	}()

	logger.Info("Starting roller")
	if err := http.ListenAndServe(":5000", nil); err != nil {
		logger.Fatal("failed starting web server", zap.Error(err))
	}

}
