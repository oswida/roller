// Code generated by ent, DO NOT EDIT.

package charsheet

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the charsheet type in the database.
	Label = "charsheet"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldTemplate holds the string denoting the template field in the database.
	FieldTemplate = "template"
	// FieldValues holds the string denoting the values field in the database.
	FieldValues = "values"
	// FieldShared holds the string denoting the shared field in the database.
	FieldShared = "shared"
	// FieldPortrait holds the string denoting the portrait field in the database.
	FieldPortrait = "portrait"
	// EdgeOwner holds the string denoting the owner edge name in mutations.
	EdgeOwner = "owner"
	// Table holds the table name of the charsheet in the database.
	Table = "charsheets"
	// OwnerTable is the table that holds the owner relation/edge.
	OwnerTable = "charsheets"
	// OwnerInverseTable is the table name for the User entity.
	// It exists in this package in order to avoid circular dependency with the "user" package.
	OwnerInverseTable = "users"
	// OwnerColumn is the table column denoting the owner relation/edge.
	OwnerColumn = "user_charsheets"
)

// Columns holds all SQL columns for charsheet fields.
var Columns = []string{
	FieldID,
	FieldName,
	FieldTemplate,
	FieldValues,
	FieldShared,
	FieldPortrait,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "charsheets"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"user_charsheets",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

// OrderOption defines the ordering options for the Charsheet queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByName orders the results by the name field.
func ByName(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldName, opts...).ToFunc()
}

// ByTemplate orders the results by the template field.
func ByTemplate(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldTemplate, opts...).ToFunc()
}

// ByShared orders the results by the shared field.
func ByShared(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldShared, opts...).ToFunc()
}

// ByPortrait orders the results by the portrait field.
func ByPortrait(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldPortrait, opts...).ToFunc()
}

// ByOwnerField orders the results by owner field.
func ByOwnerField(field string, opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newOwnerStep(), sql.OrderByField(field, opts...))
	}
}
func newOwnerStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(OwnerInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2O, true, OwnerTable, OwnerColumn),
	)
}
