// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"rpgroll/ent/room"
	"rpgroll/ent/user"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
)

// Room is the model entity for the Room schema.
type Room struct {
	config `json:"-"`
	// ID of the ent.
	ID string `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Bkg holds the value of the "bkg" field.
	Bkg string `json:"bkg,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the RoomQuery when eager-loading is set.
	Edges        RoomEdges `json:"edges"`
	user_rooms   *string
	selectValues sql.SelectValues
}

// RoomEdges holds the relations/edges for other nodes in the graph.
type RoomEdges struct {
	// Rolls holds the value of the rolls edge.
	Rolls []*Roll `json:"rolls,omitempty"`
	// Owner holds the value of the owner edge.
	Owner *User `json:"owner,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// RollsOrErr returns the Rolls value or an error if the edge
// was not loaded in eager-loading.
func (e RoomEdges) RollsOrErr() ([]*Roll, error) {
	if e.loadedTypes[0] {
		return e.Rolls, nil
	}
	return nil, &NotLoadedError{edge: "rolls"}
}

// OwnerOrErr returns the Owner value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e RoomEdges) OwnerOrErr() (*User, error) {
	if e.loadedTypes[1] {
		if e.Owner == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: user.Label}
		}
		return e.Owner, nil
	}
	return nil, &NotLoadedError{edge: "owner"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Room) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case room.FieldID, room.FieldName, room.FieldBkg:
			values[i] = new(sql.NullString)
		case room.ForeignKeys[0]: // user_rooms
			values[i] = new(sql.NullString)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Room fields.
func (r *Room) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case room.FieldID:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field id", values[i])
			} else if value.Valid {
				r.ID = value.String
			}
		case room.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				r.Name = value.String
			}
		case room.FieldBkg:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field bkg", values[i])
			} else if value.Valid {
				r.Bkg = value.String
			}
		case room.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field user_rooms", values[i])
			} else if value.Valid {
				r.user_rooms = new(string)
				*r.user_rooms = value.String
			}
		default:
			r.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Room.
// This includes values selected through modifiers, order, etc.
func (r *Room) Value(name string) (ent.Value, error) {
	return r.selectValues.Get(name)
}

// QueryRolls queries the "rolls" edge of the Room entity.
func (r *Room) QueryRolls() *RollQuery {
	return NewRoomClient(r.config).QueryRolls(r)
}

// QueryOwner queries the "owner" edge of the Room entity.
func (r *Room) QueryOwner() *UserQuery {
	return NewRoomClient(r.config).QueryOwner(r)
}

// Update returns a builder for updating this Room.
// Note that you need to call Room.Unwrap() before calling this method if this Room
// was returned from a transaction, and the transaction was committed or rolled back.
func (r *Room) Update() *RoomUpdateOne {
	return NewRoomClient(r.config).UpdateOne(r)
}

// Unwrap unwraps the Room entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (r *Room) Unwrap() *Room {
	_tx, ok := r.config.driver.(*txDriver)
	if !ok {
		panic("ent: Room is not a transactional entity")
	}
	r.config.driver = _tx.drv
	return r
}

// String implements the fmt.Stringer.
func (r *Room) String() string {
	var builder strings.Builder
	builder.WriteString("Room(")
	builder.WriteString(fmt.Sprintf("id=%v, ", r.ID))
	builder.WriteString("name=")
	builder.WriteString(r.Name)
	builder.WriteString(", ")
	builder.WriteString("bkg=")
	builder.WriteString(r.Bkg)
	builder.WriteByte(')')
	return builder.String()
}

// Rooms is a parsable slice of Room.
type Rooms []*Room