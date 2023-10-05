// Code generated by ent, DO NOT EDIT.

package ent

import (
	"encoding/json"
	"fmt"
	"rpgroll/ent/user"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/google/uuid"
)

// User is the model entity for the User schema.
type User struct {
	config `json:"-"`
	// ID of the ent.
	ID uuid.UUID `json:"id,omitempty"`
	// Login holds the value of the "login" field.
	Login string `json:"login,omitempty"`
	// Passwd holds the value of the "passwd" field.
	Passwd string `json:"passwd,omitempty"`
	// IsAdmin holds the value of the "is_admin" field.
	IsAdmin bool `json:"is_admin,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Color holds the value of the "color" field.
	Color string `json:"color,omitempty"`
	// Settings holds the value of the "settings" field.
	Settings map[string]interface{} `json:"settings,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the UserQuery when eager-loading is set.
	Edges        UserEdges `json:"edges"`
	selectValues sql.SelectValues
}

// UserEdges holds the relations/edges for other nodes in the graph.
type UserEdges struct {
	// Rooms holds the value of the rooms edge.
	Rooms []*Room `json:"rooms,omitempty"`
	// Rolls holds the value of the rolls edge.
	Rolls []*Roll `json:"rolls,omitempty"`
	// Charsheets holds the value of the charsheets edge.
	Charsheets []*Charsheet `json:"charsheets,omitempty"`
	// Rolldefs holds the value of the rolldefs edge.
	Rolldefs []*RollDef `json:"rolldefs,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [4]bool
}

// RoomsOrErr returns the Rooms value or an error if the edge
// was not loaded in eager-loading.
func (e UserEdges) RoomsOrErr() ([]*Room, error) {
	if e.loadedTypes[0] {
		return e.Rooms, nil
	}
	return nil, &NotLoadedError{edge: "rooms"}
}

// RollsOrErr returns the Rolls value or an error if the edge
// was not loaded in eager-loading.
func (e UserEdges) RollsOrErr() ([]*Roll, error) {
	if e.loadedTypes[1] {
		return e.Rolls, nil
	}
	return nil, &NotLoadedError{edge: "rolls"}
}

// CharsheetsOrErr returns the Charsheets value or an error if the edge
// was not loaded in eager-loading.
func (e UserEdges) CharsheetsOrErr() ([]*Charsheet, error) {
	if e.loadedTypes[2] {
		return e.Charsheets, nil
	}
	return nil, &NotLoadedError{edge: "charsheets"}
}

// RolldefsOrErr returns the Rolldefs value or an error if the edge
// was not loaded in eager-loading.
func (e UserEdges) RolldefsOrErr() ([]*RollDef, error) {
	if e.loadedTypes[3] {
		return e.Rolldefs, nil
	}
	return nil, &NotLoadedError{edge: "rolldefs"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*User) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case user.FieldSettings:
			values[i] = new([]byte)
		case user.FieldIsAdmin:
			values[i] = new(sql.NullBool)
		case user.FieldLogin, user.FieldPasswd, user.FieldName, user.FieldColor:
			values[i] = new(sql.NullString)
		case user.FieldID:
			values[i] = new(uuid.UUID)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the User fields.
func (u *User) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case user.FieldID:
			if value, ok := values[i].(*uuid.UUID); !ok {
				return fmt.Errorf("unexpected type %T for field id", values[i])
			} else if value != nil {
				u.ID = *value
			}
		case user.FieldLogin:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field login", values[i])
			} else if value.Valid {
				u.Login = value.String
			}
		case user.FieldPasswd:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field passwd", values[i])
			} else if value.Valid {
				u.Passwd = value.String
			}
		case user.FieldIsAdmin:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field is_admin", values[i])
			} else if value.Valid {
				u.IsAdmin = value.Bool
			}
		case user.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				u.Name = value.String
			}
		case user.FieldColor:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field color", values[i])
			} else if value.Valid {
				u.Color = value.String
			}
		case user.FieldSettings:
			if value, ok := values[i].(*[]byte); !ok {
				return fmt.Errorf("unexpected type %T for field settings", values[i])
			} else if value != nil && len(*value) > 0 {
				if err := json.Unmarshal(*value, &u.Settings); err != nil {
					return fmt.Errorf("unmarshal field settings: %w", err)
				}
			}
		default:
			u.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the User.
// This includes values selected through modifiers, order, etc.
func (u *User) Value(name string) (ent.Value, error) {
	return u.selectValues.Get(name)
}

// QueryRooms queries the "rooms" edge of the User entity.
func (u *User) QueryRooms() *RoomQuery {
	return NewUserClient(u.config).QueryRooms(u)
}

// QueryRolls queries the "rolls" edge of the User entity.
func (u *User) QueryRolls() *RollQuery {
	return NewUserClient(u.config).QueryRolls(u)
}

// QueryCharsheets queries the "charsheets" edge of the User entity.
func (u *User) QueryCharsheets() *CharsheetQuery {
	return NewUserClient(u.config).QueryCharsheets(u)
}

// QueryRolldefs queries the "rolldefs" edge of the User entity.
func (u *User) QueryRolldefs() *RollDefQuery {
	return NewUserClient(u.config).QueryRolldefs(u)
}

// Update returns a builder for updating this User.
// Note that you need to call User.Unwrap() before calling this method if this User
// was returned from a transaction, and the transaction was committed or rolled back.
func (u *User) Update() *UserUpdateOne {
	return NewUserClient(u.config).UpdateOne(u)
}

// Unwrap unwraps the User entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (u *User) Unwrap() *User {
	_tx, ok := u.config.driver.(*txDriver)
	if !ok {
		panic("ent: User is not a transactional entity")
	}
	u.config.driver = _tx.drv
	return u
}

// String implements the fmt.Stringer.
func (u *User) String() string {
	var builder strings.Builder
	builder.WriteString("User(")
	builder.WriteString(fmt.Sprintf("id=%v, ", u.ID))
	builder.WriteString("login=")
	builder.WriteString(u.Login)
	builder.WriteString(", ")
	builder.WriteString("passwd=")
	builder.WriteString(u.Passwd)
	builder.WriteString(", ")
	builder.WriteString("is_admin=")
	builder.WriteString(fmt.Sprintf("%v", u.IsAdmin))
	builder.WriteString(", ")
	builder.WriteString("name=")
	builder.WriteString(u.Name)
	builder.WriteString(", ")
	builder.WriteString("color=")
	builder.WriteString(u.Color)
	builder.WriteString(", ")
	builder.WriteString("settings=")
	builder.WriteString(fmt.Sprintf("%v", u.Settings))
	builder.WriteByte(')')
	return builder.String()
}

// Users is a parsable slice of User.
type Users []*User
