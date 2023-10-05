//go:build mage
// +build mage

package main

import (
	"fmt"
	"os"
	"os/exec"

	cp "github.com/otiai10/copy"
)

// A build step that requires additional params, or platform specific steps for example
func Build() error {
	fmt.Println("Building frontend...")
	back, err := changeWorkDir("frontend")
	if err != nil {
		return err
	}
	cmd := exec.Command("pnpm", "build")
	err = cmd.Run()
	if err != nil {
		return err
	}
	back()

	if err := cp.Copy("frontend/dist/public", "backend/resources/web"); err != nil {
		return err
	}

	fmt.Println("Building backend...")
	back, err = changeWorkDir("backend")
	if err != nil {
		return err
	}
	cmd = exec.Command("go", "build", "-o", "rpgroll", ".")
	err = cmd.Run()
	if err != nil {
		return err
	}
	back()
	return nil
}

// Clean up after yourself
func Clean() {
	fmt.Println("Cleaning...")
	os.RemoveAll("backend/rpgroll")
	os.RemoveAll("backend/resources/web/*")
	os.RemoveAll("frontend/dist/*")
}
