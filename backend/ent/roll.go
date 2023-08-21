// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"rpgroll/ent/roll"
	"rpgroll/ent/user"
	"strings"
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
)

// Roll is the model entity for the Roll schema.
type Roll struct {
	config `json:"-"`
	// ID of the ent.
	ID string `json:"id,omitempty"`
	// Tstamp holds the value of the "tstamp" field.
	Tstamp string `json:"tstamp,omitempty"`
	// Time holds the value of the "time" field.
	Time time.Time `json:"time,omitempty"`
	// Result holds the value of the "result" field.
	Result string `json:"result,omitempty"`
	// DiceColor holds the value of the "diceColor" field.
	DiceColor string `json:"diceColor,omitempty"`
	// DiceMaterial holds the value of the "diceMaterial" field.
	DiceMaterial string `json:"diceMaterial,omitempty"`
	// Comment holds the value of the "comment" field.
	Comment string `json:"comment,omitempty"`
	// SuccessRule holds the value of the "successRule" field.
	SuccessRule string `json:"successRule,omitempty"`
	// SuccessTarget holds the value of the "successTarget" field.
	SuccessTarget int `json:"successTarget,omitempty"`
	// Private holds the value of the "private" field.
	Private bool `json:"private,omitempty"`
	// Revealed holds the value of the "revealed" field.
	Revealed bool `json:"revealed,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the RollQuery when eager-loading is set.
	Edges        RollEdges `json:"edges"`
	room_rolls   *string
	user_rolls   *string
	selectValues sql.SelectValues
}

// RollEdges holds the relations/edges for other nodes in the graph.
type RollEdges struct {
	// Owner holds the value of the owner edge.
	Owner *User `json:"owner,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// OwnerOrErr returns the Owner value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e RollEdges) OwnerOrErr() (*User, error) {
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
func (*Roll) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case roll.FieldPrivate, roll.FieldRevealed:
			values[i] = new(sql.NullBool)
		case roll.FieldSuccessTarget:
			values[i] = new(sql.NullInt64)
		case roll.FieldID, roll.FieldTstamp, roll.FieldResult, roll.FieldDiceColor, roll.FieldDiceMaterial, roll.FieldComment, roll.FieldSuccessRule:
			values[i] = new(sql.NullString)
		case roll.FieldTime:
			values[i] = new(sql.NullTime)
		case roll.ForeignKeys[0]: // room_rolls
			values[i] = new(sql.NullString)
		case roll.ForeignKeys[1]: // user_rolls
			values[i] = new(sql.NullString)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Roll fields.
func (r *Roll) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case roll.FieldID:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field id", values[i])
			} else if value.Valid {
				r.ID = value.String
			}
		case roll.FieldTstamp:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field tstamp", values[i])
			} else if value.Valid {
				r.Tstamp = value.String
			}
		case roll.FieldTime:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field time", values[i])
			} else if value.Valid {
				r.Time = value.Time
			}
		case roll.FieldResult:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field result", values[i])
			} else if value.Valid {
				r.Result = value.String
			}
		case roll.FieldDiceColor:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field diceColor", values[i])
			} else if value.Valid {
				r.DiceColor = value.String
			}
		case roll.FieldDiceMaterial:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field diceMaterial", values[i])
			} else if value.Valid {
				r.DiceMaterial = value.String
			}
		case roll.FieldComment:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field comment", values[i])
			} else if value.Valid {
				r.Comment = value.String
			}
		case roll.FieldSuccessRule:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field successRule", values[i])
			} else if value.Valid {
				r.SuccessRule = value.String
			}
		case roll.FieldSuccessTarget:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field successTarget", values[i])
			} else if value.Valid {
				r.SuccessTarget = int(value.Int64)
			}
		case roll.FieldPrivate:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field private", values[i])
			} else if value.Valid {
				r.Private = value.Bool
			}
		case roll.FieldRevealed:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field revealed", values[i])
			} else if value.Valid {
				r.Revealed = value.Bool
			}
		case roll.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field room_rolls", values[i])
			} else if value.Valid {
				r.room_rolls = new(string)
				*r.room_rolls = value.String
			}
		case roll.ForeignKeys[1]:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field user_rolls", values[i])
			} else if value.Valid {
				r.user_rolls = new(string)
				*r.user_rolls = value.String
			}
		default:
			r.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Roll.
// This includes values selected through modifiers, order, etc.
func (r *Roll) Value(name string) (ent.Value, error) {
	return r.selectValues.Get(name)
}

// QueryOwner queries the "owner" edge of the Roll entity.
func (r *Roll) QueryOwner() *UserQuery {
	return NewRollClient(r.config).QueryOwner(r)
}

// Update returns a builder for updating this Roll.
// Note that you need to call Roll.Unwrap() before calling this method if this Roll
// was returned from a transaction, and the transaction was committed or rolled back.
func (r *Roll) Update() *RollUpdateOne {
	return NewRollClient(r.config).UpdateOne(r)
}

// Unwrap unwraps the Roll entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (r *Roll) Unwrap() *Roll {
	_tx, ok := r.config.driver.(*txDriver)
	if !ok {
		panic("ent: Roll is not a transactional entity")
	}
	r.config.driver = _tx.drv
	return r
}

// String implements the fmt.Stringer.
func (r *Roll) String() string {
	var builder strings.Builder
	builder.WriteString("Roll(")
	builder.WriteString(fmt.Sprintf("id=%v, ", r.ID))
	builder.WriteString("tstamp=")
	builder.WriteString(r.Tstamp)
	builder.WriteString(", ")
	builder.WriteString("time=")
	builder.WriteString(r.Time.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("result=")
	builder.WriteString(r.Result)
	builder.WriteString(", ")
	builder.WriteString("diceColor=")
	builder.WriteString(r.DiceColor)
	builder.WriteString(", ")
	builder.WriteString("diceMaterial=")
	builder.WriteString(r.DiceMaterial)
	builder.WriteString(", ")
	builder.WriteString("comment=")
	builder.WriteString(r.Comment)
	builder.WriteString(", ")
	builder.WriteString("successRule=")
	builder.WriteString(r.SuccessRule)
	builder.WriteString(", ")
	builder.WriteString("successTarget=")
	builder.WriteString(fmt.Sprintf("%v", r.SuccessTarget))
	builder.WriteString(", ")
	builder.WriteString("private=")
	builder.WriteString(fmt.Sprintf("%v", r.Private))
	builder.WriteString(", ")
	builder.WriteString("revealed=")
	builder.WriteString(fmt.Sprintf("%v", r.Revealed))
	builder.WriteByte(')')
	return builder.String()
}

// Rolls is a parsable slice of Roll.
type Rolls []*Roll
