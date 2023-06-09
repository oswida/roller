package main

import (
	"os"
	"path/filepath"

	"github.com/magefile/mage/mg"
)

func changeWorkDir(path string) (func(), error) {
	owd, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	revert := func() {
		if err := os.Chdir(owd); err != nil {
			panic(mg.Fatal(1, err))
		}
	}

	// Golang requires to commands to be run from root backend directory
	if err := os.Chdir(filepath.Join(owd, path)); err != nil {
		return nil, err
	}

	return revert, nil
}
