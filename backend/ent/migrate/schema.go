// Code generated by ent, DO NOT EDIT.

package migrate

import (
	"entgo.io/ent/dialect/sql/schema"
	"entgo.io/ent/schema/field"
)

var (
	// CharsheetsColumns holds the columns for the "charsheets" table.
	CharsheetsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeString, Unique: true},
		{Name: "name", Type: field.TypeString},
		{Name: "template", Type: field.TypeString},
		{Name: "values", Type: field.TypeJSON},
		{Name: "shared", Type: field.TypeBool},
		{Name: "portrait", Type: field.TypeString},
		{Name: "user_charsheets", Type: field.TypeString, Nullable: true},
	}
	// CharsheetsTable holds the schema information for the "charsheets" table.
	CharsheetsTable = &schema.Table{
		Name:       "charsheets",
		Columns:    CharsheetsColumns,
		PrimaryKey: []*schema.Column{CharsheetsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "charsheets_users_charsheets",
				Columns:    []*schema.Column{CharsheetsColumns[6]},
				RefColumns: []*schema.Column{UsersColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// RollsColumns holds the columns for the "rolls" table.
	RollsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeString, Unique: true},
		{Name: "tstamp", Type: field.TypeString},
		{Name: "time", Type: field.TypeTime},
		{Name: "result", Type: field.TypeString},
		{Name: "dice_color", Type: field.TypeString},
		{Name: "dice_material", Type: field.TypeString},
		{Name: "comment", Type: field.TypeString},
		{Name: "success_rule", Type: field.TypeString},
		{Name: "success_target", Type: field.TypeInt},
		{Name: "private", Type: field.TypeBool},
		{Name: "revealed", Type: field.TypeBool},
		{Name: "room_rolls", Type: field.TypeString, Nullable: true},
		{Name: "user_rolls", Type: field.TypeString, Nullable: true},
	}
	// RollsTable holds the schema information for the "rolls" table.
	RollsTable = &schema.Table{
		Name:       "rolls",
		Columns:    RollsColumns,
		PrimaryKey: []*schema.Column{RollsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "rolls_rooms_rolls",
				Columns:    []*schema.Column{RollsColumns[11]},
				RefColumns: []*schema.Column{RoomsColumns[0]},
				OnDelete:   schema.SetNull,
			},
			{
				Symbol:     "rolls_users_rolls",
				Columns:    []*schema.Column{RollsColumns[12]},
				RefColumns: []*schema.Column{UsersColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// RollDefsColumns holds the columns for the "roll_defs" table.
	RollDefsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeString, Unique: true},
		{Name: "name", Type: field.TypeString},
		{Name: "dice", Type: field.TypeString},
		{Name: "modifier", Type: field.TypeInt},
		{Name: "success_rule", Type: field.TypeString},
		{Name: "success_target", Type: field.TypeString},
		{Name: "comment", Type: field.TypeString},
		{Name: "shared", Type: field.TypeBool, Default: false},
		{Name: "user_rolldefs", Type: field.TypeString, Nullable: true},
	}
	// RollDefsTable holds the schema information for the "roll_defs" table.
	RollDefsTable = &schema.Table{
		Name:       "roll_defs",
		Columns:    RollDefsColumns,
		PrimaryKey: []*schema.Column{RollDefsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "roll_defs_users_rolldefs",
				Columns:    []*schema.Column{RollDefsColumns[8]},
				RefColumns: []*schema.Column{UsersColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// RoomsColumns holds the columns for the "rooms" table.
	RoomsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeString, Unique: true},
		{Name: "name", Type: field.TypeString},
		{Name: "bkg", Type: field.TypeString},
		{Name: "user_rooms", Type: field.TypeString, Nullable: true},
	}
	// RoomsTable holds the schema information for the "rooms" table.
	RoomsTable = &schema.Table{
		Name:       "rooms",
		Columns:    RoomsColumns,
		PrimaryKey: []*schema.Column{RoomsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "rooms_users_rooms",
				Columns:    []*schema.Column{RoomsColumns[3]},
				RefColumns: []*schema.Column{UsersColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// UsersColumns holds the columns for the "users" table.
	UsersColumns = []*schema.Column{
		{Name: "id", Type: field.TypeString, Unique: true},
		{Name: "login", Type: field.TypeString},
		{Name: "passwd", Type: field.TypeString},
		{Name: "is_admin", Type: field.TypeBool, Default: false},
		{Name: "name", Type: field.TypeString},
		{Name: "color", Type: field.TypeString},
		{Name: "settings", Type: field.TypeJSON},
	}
	// UsersTable holds the schema information for the "users" table.
	UsersTable = &schema.Table{
		Name:       "users",
		Columns:    UsersColumns,
		PrimaryKey: []*schema.Column{UsersColumns[0]},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		CharsheetsTable,
		RollsTable,
		RollDefsTable,
		RoomsTable,
		UsersTable,
	}
)

func init() {
	CharsheetsTable.ForeignKeys[0].RefTable = UsersTable
	RollsTable.ForeignKeys[0].RefTable = RoomsTable
	RollsTable.ForeignKeys[1].RefTable = UsersTable
	RollDefsTable.ForeignKeys[0].RefTable = UsersTable
	RoomsTable.ForeignKeys[0].RefTable = UsersTable
}
