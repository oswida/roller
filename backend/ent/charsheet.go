// Code generated by ent, DO NOT EDIT.

package ent

import (
	"encoding/json"
	"fmt"
	"rpgroll/ent/charsheet"
	"rpgroll/ent/user"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/google/uuid"
)

// Charsheet is the model entity for the Charsheet schema.
type Charsheet struct {
	config `json:"-"`
	// ID of the ent.
	ID string `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Template holds the value of the "template" field.
	Template string `json:"template,omitempty"`
	// Values holds the value of the "values" field.
	Values map[string]interface{} `json:"values,omitempty"`
	// Shared holds the value of the "shared" field.
	Shared bool `json:"shared,omitempty"`
	// Portrait holds the value of the "portrait" field.
	Portrait string `json:"portrait,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the CharsheetQuery when eager-loading is set.
	Edges           CharsheetEdges `json:"edges"`
	user_charsheets *uuid.UUID
	selectValues    sql.SelectValues
}

// CharsheetEdges holds the relations/edges for other nodes in the graph.
type CharsheetEdges struct {
	// Owner holds the value of the owner edge.
	Owner *User `json:"owner,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// OwnerOrErr returns the Owner value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e CharsheetEdges) OwnerOrErr() (*User, error) {
	if e.loadedTypes[0] {
		if e.Owner == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: user.Label}
		}
		return e.Owner, nil
	}
	return nil, &NotLoadedError{edge: "owner"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Charsheet) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case charsheet.FieldValues:
			values[i] = new([]byte)
		case charsheet.FieldShared:
			values[i] = new(sql.NullBool)
		case charsheet.FieldID, charsheet.FieldName, charsheet.FieldTemplate, charsheet.FieldPortrait:
			values[i] = new(sql.NullString)
		case charsheet.ForeignKeys[0]: // user_charsheets
			values[i] = &sql.NullScanner{S: new(uuid.UUID)}
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Charsheet fields.
func (c *Charsheet) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case charsheet.FieldID:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field id", values[i])
			} else if value.Valid {
				c.ID = value.String
			}
		case charsheet.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				c.Name = value.String
			}
		case charsheet.FieldTemplate:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field template", values[i])
			} else if value.Valid {
				c.Template = value.String
			}
		case charsheet.FieldValues:
			if value, ok := values[i].(*[]byte); !ok {
				return fmt.Errorf("unexpected type %T for field values", values[i])
			} else if value != nil && len(*value) > 0 {
				if err := json.Unmarshal(*value, &c.Values); err != nil {
					return fmt.Errorf("unmarshal field values: %w", err)
				}
			}
		case charsheet.FieldShared:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field shared", values[i])
			} else if value.Valid {
				c.Shared = value.Bool
			}
		case charsheet.FieldPortrait:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field portrait", values[i])
			} else if value.Valid {
				c.Portrait = value.String
			}
		case charsheet.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullScanner); !ok {
				return fmt.Errorf("unexpected type %T for field user_charsheets", values[i])
			} else if value.Valid {
				c.user_charsheets = new(uuid.UUID)
				*c.user_charsheets = *value.S.(*uuid.UUID)
			}
		default:
			c.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Charsheet.
// This includes values selected through modifiers, order, etc.
func (c *Charsheet) Value(name string) (ent.Value, error) {
	return c.selectValues.Get(name)
}

// QueryOwner queries the "owner" edge of the Charsheet entity.
func (c *Charsheet) QueryOwner() *UserQuery {
	return NewCharsheetClient(c.config).QueryOwner(c)
}

// Update returns a builder for updating this Charsheet.
// Note that you need to call Charsheet.Unwrap() before calling this method if this Charsheet
// was returned from a transaction, and the transaction was committed or rolled back.
func (c *Charsheet) Update() *CharsheetUpdateOne {
	return NewCharsheetClient(c.config).UpdateOne(c)
}

// Unwrap unwraps the Charsheet entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (c *Charsheet) Unwrap() *Charsheet {
	_tx, ok := c.config.driver.(*txDriver)
	if !ok {
		panic("ent: Charsheet is not a transactional entity")
	}
	c.config.driver = _tx.drv
	return c
}

// String implements the fmt.Stringer.
func (c *Charsheet) String() string {
	var builder strings.Builder
	builder.WriteString("Charsheet(")
	builder.WriteString(fmt.Sprintf("id=%v, ", c.ID))
	builder.WriteString("name=")
	builder.WriteString(c.Name)
	builder.WriteString(", ")
	builder.WriteString("template=")
	builder.WriteString(c.Template)
	builder.WriteString(", ")
	builder.WriteString("values=")
	builder.WriteString(fmt.Sprintf("%v", c.Values))
	builder.WriteString(", ")
	builder.WriteString("shared=")
	builder.WriteString(fmt.Sprintf("%v", c.Shared))
	builder.WriteString(", ")
	builder.WriteString("portrait=")
	builder.WriteString(c.Portrait)
	builder.WriteByte(')')
	return builder.String()
}

// Charsheets is a parsable slice of Charsheet.
type Charsheets []*Charsheet
