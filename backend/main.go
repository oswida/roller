package main

import (
	"embed"
	"errors"
	"os"
	"os/signal"
	"rpgroll/db"
	"rpgroll/net"
	"syscall"

	"github.com/knadh/koanf/parsers/toml"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"
	"go.uber.org/zap"
)

//go:embed resources/*
var efs embed.FS

func init() {
	if _, err := os.Stat("config.toml"); errors.Is(err, os.ErrNotExist) {
		bytes, err := efs.ReadFile("resources/config.toml")
		if err != nil {
			panic(err)
		}
		err = os.WriteFile("config.toml", bytes, os.ModePerm)
		if err != nil {
			panic(err)
		}
	}
}

func main() {
	logcfg := zap.NewProductionConfig()
	logcfg.OutputPaths = []string{"rpgroll.log"}

	logger, err := logcfg.Build()
	if err != nil {
		panic(err)
	}

	k := koanf.New(".")
	if err := k.Load(file.Provider("config.toml"), toml.Parser()); err != nil {
		panic(err)
	}

	dbase, err := db.NewDatabase(logger, k)
	if err != nil {
		panic(err)
	}

	server, err := net.NewServer(dbase, logger, k, efs)
	if err != nil {
		panic(err)
	}

	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		dbase.Close()
		server.Stop()
		os.Exit(1)
	}()

	err = server.Run()
	if err != nil {
		panic(err)
	}
}
