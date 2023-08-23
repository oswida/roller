// Code generated by ent, DO NOT EDIT.

package ent

import (
	"rpgroll/ent/rolldef"
	"rpgroll/ent/schema"
	"rpgroll/ent/user"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	rolldefFields := schema.RollDef{}.Fields()
	_ = rolldefFields
	// rolldefDescShared is the schema descriptor for shared field.
	rolldefDescShared := rolldefFields[7].Descriptor()
	// rolldef.DefaultShared holds the default value on creation for the shared field.
	rolldef.DefaultShared = rolldefDescShared.Default.(bool)
	userFields := schema.User{}.Fields()
	_ = userFields
	// userDescIsAdmin is the schema descriptor for is_admin field.
	userDescIsAdmin := userFields[3].Descriptor()
	// user.DefaultIsAdmin holds the default value on creation for the is_admin field.
	user.DefaultIsAdmin = userDescIsAdmin.Default.(bool)
}
