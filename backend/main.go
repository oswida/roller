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
	dbase, err := db.InitDatabase()
	if err != nil {
		panic(err)
	}

	node, err := net.NewCentrifugeNode(dbase)
	if err != nil {
		panic(err)
	}

	if err := node.Run(); err != nil {
		log.Fatal(err)
	}

	wsHandler := centrifuge.NewWebsocketHandler(node, centrifuge.WebsocketConfig{
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

	log.Printf("Starting server, visit http://localhost:5000")
	if err := http.ListenAndServe(":5000", nil); err != nil {
		log.Fatal(err)
	}
}
