// Code generated by ent, DO NOT EDIT.

package user

import (
	"rpgroll/ent/predicate"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

// ID filters vertices based on their ID field.
func ID(id string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id string) predicate.User {
	return predicate.User(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...string) predicate.User {
	return predicate.User(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...string) predicate.User {
	return predicate.User(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id string) predicate.User {
	return predicate.User(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id string) predicate.User {
	return predicate.User(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id string) predicate.User {
	return predicate.User(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id string) predicate.User {
	return predicate.User(sql.FieldLTE(FieldID, id))
}

// IDEqualFold applies the EqualFold predicate on the ID field.
func IDEqualFold(id string) predicate.User {
	return predicate.User(sql.FieldEqualFold(FieldID, id))
}

// IDContainsFold applies the ContainsFold predicate on the ID field.
func IDContainsFold(id string) predicate.User {
	return predicate.User(sql.FieldContainsFold(FieldID, id))
}

// Login applies equality check predicate on the "login" field. It's identical to LoginEQ.
func Login(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldLogin, v))
}

// Passwd applies equality check predicate on the "passwd" field. It's identical to PasswdEQ.
func Passwd(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldPasswd, v))
}

// Name applies equality check predicate on the "name" field. It's identical to NameEQ.
func Name(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldName, v))
}

// Color applies equality check predicate on the "color" field. It's identical to ColorEQ.
func Color(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldColor, v))
}

// LoginEQ applies the EQ predicate on the "login" field.
func LoginEQ(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldLogin, v))
}

// LoginNEQ applies the NEQ predicate on the "login" field.
func LoginNEQ(v string) predicate.User {
	return predicate.User(sql.FieldNEQ(FieldLogin, v))
}

// LoginIn applies the In predicate on the "login" field.
func LoginIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldIn(FieldLogin, vs...))
}

// LoginNotIn applies the NotIn predicate on the "login" field.
func LoginNotIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldNotIn(FieldLogin, vs...))
}

// LoginGT applies the GT predicate on the "login" field.
func LoginGT(v string) predicate.User {
	return predicate.User(sql.FieldGT(FieldLogin, v))
}

// LoginGTE applies the GTE predicate on the "login" field.
func LoginGTE(v string) predicate.User {
	return predicate.User(sql.FieldGTE(FieldLogin, v))
}

// LoginLT applies the LT predicate on the "login" field.
func LoginLT(v string) predicate.User {
	return predicate.User(sql.FieldLT(FieldLogin, v))
}

// LoginLTE applies the LTE predicate on the "login" field.
func LoginLTE(v string) predicate.User {
	return predicate.User(sql.FieldLTE(FieldLogin, v))
}

// LoginContains applies the Contains predicate on the "login" field.
func LoginContains(v string) predicate.User {
	return predicate.User(sql.FieldContains(FieldLogin, v))
}

// LoginHasPrefix applies the HasPrefix predicate on the "login" field.
func LoginHasPrefix(v string) predicate.User {
	return predicate.User(sql.FieldHasPrefix(FieldLogin, v))
}

// LoginHasSuffix applies the HasSuffix predicate on the "login" field.
func LoginHasSuffix(v string) predicate.User {
	return predicate.User(sql.FieldHasSuffix(FieldLogin, v))
}

// LoginEqualFold applies the EqualFold predicate on the "login" field.
func LoginEqualFold(v string) predicate.User {
	return predicate.User(sql.FieldEqualFold(FieldLogin, v))
}

// LoginContainsFold applies the ContainsFold predicate on the "login" field.
func LoginContainsFold(v string) predicate.User {
	return predicate.User(sql.FieldContainsFold(FieldLogin, v))
}

// PasswdEQ applies the EQ predicate on the "passwd" field.
func PasswdEQ(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldPasswd, v))
}

// PasswdNEQ applies the NEQ predicate on the "passwd" field.
func PasswdNEQ(v string) predicate.User {
	return predicate.User(sql.FieldNEQ(FieldPasswd, v))
}

// PasswdIn applies the In predicate on the "passwd" field.
func PasswdIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldIn(FieldPasswd, vs...))
}

// PasswdNotIn applies the NotIn predicate on the "passwd" field.
func PasswdNotIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldNotIn(FieldPasswd, vs...))
}

// PasswdGT applies the GT predicate on the "passwd" field.
func PasswdGT(v string) predicate.User {
	return predicate.User(sql.FieldGT(FieldPasswd, v))
}

// PasswdGTE applies the GTE predicate on the "passwd" field.
func PasswdGTE(v string) predicate.User {
	return predicate.User(sql.FieldGTE(FieldPasswd, v))
}

// PasswdLT applies the LT predicate on the "passwd" field.
func PasswdLT(v string) predicate.User {
	return predicate.User(sql.FieldLT(FieldPasswd, v))
}

// PasswdLTE applies the LTE predicate on the "passwd" field.
func PasswdLTE(v string) predicate.User {
	return predicate.User(sql.FieldLTE(FieldPasswd, v))
}

// PasswdContains applies the Contains predicate on the "passwd" field.
func PasswdContains(v string) predicate.User {
	return predicate.User(sql.FieldContains(FieldPasswd, v))
}

// PasswdHasPrefix applies the HasPrefix predicate on the "passwd" field.
func PasswdHasPrefix(v string) predicate.User {
	return predicate.User(sql.FieldHasPrefix(FieldPasswd, v))
}

// PasswdHasSuffix applies the HasSuffix predicate on the "passwd" field.
func PasswdHasSuffix(v string) predicate.User {
	return predicate.User(sql.FieldHasSuffix(FieldPasswd, v))
}

// PasswdEqualFold applies the EqualFold predicate on the "passwd" field.
func PasswdEqualFold(v string) predicate.User {
	return predicate.User(sql.FieldEqualFold(FieldPasswd, v))
}

// PasswdContainsFold applies the ContainsFold predicate on the "passwd" field.
func PasswdContainsFold(v string) predicate.User {
	return predicate.User(sql.FieldContainsFold(FieldPasswd, v))
}

// NameEQ applies the EQ predicate on the "name" field.
func NameEQ(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldName, v))
}

// NameNEQ applies the NEQ predicate on the "name" field.
func NameNEQ(v string) predicate.User {
	return predicate.User(sql.FieldNEQ(FieldName, v))
}

// NameIn applies the In predicate on the "name" field.
func NameIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldIn(FieldName, vs...))
}

// NameNotIn applies the NotIn predicate on the "name" field.
func NameNotIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldNotIn(FieldName, vs...))
}

// NameGT applies the GT predicate on the "name" field.
func NameGT(v string) predicate.User {
	return predicate.User(sql.FieldGT(FieldName, v))
}

// NameGTE applies the GTE predicate on the "name" field.
func NameGTE(v string) predicate.User {
	return predicate.User(sql.FieldGTE(FieldName, v))
}

// NameLT applies the LT predicate on the "name" field.
func NameLT(v string) predicate.User {
	return predicate.User(sql.FieldLT(FieldName, v))
}

// NameLTE applies the LTE predicate on the "name" field.
func NameLTE(v string) predicate.User {
	return predicate.User(sql.FieldLTE(FieldName, v))
}

// NameContains applies the Contains predicate on the "name" field.
func NameContains(v string) predicate.User {
	return predicate.User(sql.FieldContains(FieldName, v))
}

// NameHasPrefix applies the HasPrefix predicate on the "name" field.
func NameHasPrefix(v string) predicate.User {
	return predicate.User(sql.FieldHasPrefix(FieldName, v))
}

// NameHasSuffix applies the HasSuffix predicate on the "name" field.
func NameHasSuffix(v string) predicate.User {
	return predicate.User(sql.FieldHasSuffix(FieldName, v))
}

// NameEqualFold applies the EqualFold predicate on the "name" field.
func NameEqualFold(v string) predicate.User {
	return predicate.User(sql.FieldEqualFold(FieldName, v))
}

// NameContainsFold applies the ContainsFold predicate on the "name" field.
func NameContainsFold(v string) predicate.User {
	return predicate.User(sql.FieldContainsFold(FieldName, v))
}

// ColorEQ applies the EQ predicate on the "color" field.
func ColorEQ(v string) predicate.User {
	return predicate.User(sql.FieldEQ(FieldColor, v))
}

// ColorNEQ applies the NEQ predicate on the "color" field.
func ColorNEQ(v string) predicate.User {
	return predicate.User(sql.FieldNEQ(FieldColor, v))
}

// ColorIn applies the In predicate on the "color" field.
func ColorIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldIn(FieldColor, vs...))
}

// ColorNotIn applies the NotIn predicate on the "color" field.
func ColorNotIn(vs ...string) predicate.User {
	return predicate.User(sql.FieldNotIn(FieldColor, vs...))
}

// ColorGT applies the GT predicate on the "color" field.
func ColorGT(v string) predicate.User {
	return predicate.User(sql.FieldGT(FieldColor, v))
}

// ColorGTE applies the GTE predicate on the "color" field.
func ColorGTE(v string) predicate.User {
	return predicate.User(sql.FieldGTE(FieldColor, v))
}

// ColorLT applies the LT predicate on the "color" field.
func ColorLT(v string) predicate.User {
	return predicate.User(sql.FieldLT(FieldColor, v))
}

// ColorLTE applies the LTE predicate on the "color" field.
func ColorLTE(v string) predicate.User {
	return predicate.User(sql.FieldLTE(FieldColor, v))
}

// ColorContains applies the Contains predicate on the "color" field.
func ColorContains(v string) predicate.User {
	return predicate.User(sql.FieldContains(FieldColor, v))
}

// ColorHasPrefix applies the HasPrefix predicate on the "color" field.
func ColorHasPrefix(v string) predicate.User {
	return predicate.User(sql.FieldHasPrefix(FieldColor, v))
}

// ColorHasSuffix applies the HasSuffix predicate on the "color" field.
func ColorHasSuffix(v string) predicate.User {
	return predicate.User(sql.FieldHasSuffix(FieldColor, v))
}

// ColorEqualFold applies the EqualFold predicate on the "color" field.
func ColorEqualFold(v string) predicate.User {
	return predicate.User(sql.FieldEqualFold(FieldColor, v))
}

// ColorContainsFold applies the ContainsFold predicate on the "color" field.
func ColorContainsFold(v string) predicate.User {
	return predicate.User(sql.FieldContainsFold(FieldColor, v))
}

// HasRooms applies the HasEdge predicate on the "rooms" edge.
func HasRooms() predicate.User {
	return predicate.User(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, RoomsTable, RoomsColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasRoomsWith applies the HasEdge predicate on the "rooms" edge with a given conditions (other predicates).
func HasRoomsWith(preds ...predicate.Room) predicate.User {
	return predicate.User(func(s *sql.Selector) {
		step := newRoomsStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasRolls applies the HasEdge predicate on the "rolls" edge.
func HasRolls() predicate.User {
	return predicate.User(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, RollsTable, RollsColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasRollsWith applies the HasEdge predicate on the "rolls" edge with a given conditions (other predicates).
func HasRollsWith(preds ...predicate.Roll) predicate.User {
	return predicate.User(func(s *sql.Selector) {
		step := newRollsStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasCharsheets applies the HasEdge predicate on the "charsheets" edge.
func HasCharsheets() predicate.User {
	return predicate.User(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, CharsheetsTable, CharsheetsColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasCharsheetsWith applies the HasEdge predicate on the "charsheets" edge with a given conditions (other predicates).
func HasCharsheetsWith(preds ...predicate.Charsheet) predicate.User {
	return predicate.User(func(s *sql.Selector) {
		step := newCharsheetsStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.User) predicate.User {
	return predicate.User(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.User) predicate.User {
	return predicate.User(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for i, p := range predicates {
			if i > 0 {
				s1.Or()
			}
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Not applies the not operator on the given predicate.
func Not(p predicate.User) predicate.User {
	return predicate.User(func(s *sql.Selector) {
		p(s.Not())
	})
}
