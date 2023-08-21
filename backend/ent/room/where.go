// Code generated by ent, DO NOT EDIT.

package room

import (
	"rpgroll/ent/predicate"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

// ID filters vertices based on their ID field.
func ID(id string) predicate.Room {
	return predicate.Room(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id string) predicate.Room {
	return predicate.Room(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id string) predicate.Room {
	return predicate.Room(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...string) predicate.Room {
	return predicate.Room(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...string) predicate.Room {
	return predicate.Room(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id string) predicate.Room {
	return predicate.Room(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id string) predicate.Room {
	return predicate.Room(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id string) predicate.Room {
	return predicate.Room(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id string) predicate.Room {
	return predicate.Room(sql.FieldLTE(FieldID, id))
}

// IDEqualFold applies the EqualFold predicate on the ID field.
func IDEqualFold(id string) predicate.Room {
	return predicate.Room(sql.FieldEqualFold(FieldID, id))
}

// IDContainsFold applies the ContainsFold predicate on the ID field.
func IDContainsFold(id string) predicate.Room {
	return predicate.Room(sql.FieldContainsFold(FieldID, id))
}

// Name applies equality check predicate on the "name" field. It's identical to NameEQ.
func Name(v string) predicate.Room {
	return predicate.Room(sql.FieldEQ(FieldName, v))
}

// Bkg applies equality check predicate on the "bkg" field. It's identical to BkgEQ.
func Bkg(v string) predicate.Room {
	return predicate.Room(sql.FieldEQ(FieldBkg, v))
}

// NameEQ applies the EQ predicate on the "name" field.
func NameEQ(v string) predicate.Room {
	return predicate.Room(sql.FieldEQ(FieldName, v))
}

// NameNEQ applies the NEQ predicate on the "name" field.
func NameNEQ(v string) predicate.Room {
	return predicate.Room(sql.FieldNEQ(FieldName, v))
}

// NameIn applies the In predicate on the "name" field.
func NameIn(vs ...string) predicate.Room {
	return predicate.Room(sql.FieldIn(FieldName, vs...))
}

// NameNotIn applies the NotIn predicate on the "name" field.
func NameNotIn(vs ...string) predicate.Room {
	return predicate.Room(sql.FieldNotIn(FieldName, vs...))
}

// NameGT applies the GT predicate on the "name" field.
func NameGT(v string) predicate.Room {
	return predicate.Room(sql.FieldGT(FieldName, v))
}

// NameGTE applies the GTE predicate on the "name" field.
func NameGTE(v string) predicate.Room {
	return predicate.Room(sql.FieldGTE(FieldName, v))
}

// NameLT applies the LT predicate on the "name" field.
func NameLT(v string) predicate.Room {
	return predicate.Room(sql.FieldLT(FieldName, v))
}

// NameLTE applies the LTE predicate on the "name" field.
func NameLTE(v string) predicate.Room {
	return predicate.Room(sql.FieldLTE(FieldName, v))
}

// NameContains applies the Contains predicate on the "name" field.
func NameContains(v string) predicate.Room {
	return predicate.Room(sql.FieldContains(FieldName, v))
}

// NameHasPrefix applies the HasPrefix predicate on the "name" field.
func NameHasPrefix(v string) predicate.Room {
	return predicate.Room(sql.FieldHasPrefix(FieldName, v))
}

// NameHasSuffix applies the HasSuffix predicate on the "name" field.
func NameHasSuffix(v string) predicate.Room {
	return predicate.Room(sql.FieldHasSuffix(FieldName, v))
}

// NameEqualFold applies the EqualFold predicate on the "name" field.
func NameEqualFold(v string) predicate.Room {
	return predicate.Room(sql.FieldEqualFold(FieldName, v))
}

// NameContainsFold applies the ContainsFold predicate on the "name" field.
func NameContainsFold(v string) predicate.Room {
	return predicate.Room(sql.FieldContainsFold(FieldName, v))
}

// BkgEQ applies the EQ predicate on the "bkg" field.
func BkgEQ(v string) predicate.Room {
	return predicate.Room(sql.FieldEQ(FieldBkg, v))
}

// BkgNEQ applies the NEQ predicate on the "bkg" field.
func BkgNEQ(v string) predicate.Room {
	return predicate.Room(sql.FieldNEQ(FieldBkg, v))
}

// BkgIn applies the In predicate on the "bkg" field.
func BkgIn(vs ...string) predicate.Room {
	return predicate.Room(sql.FieldIn(FieldBkg, vs...))
}

// BkgNotIn applies the NotIn predicate on the "bkg" field.
func BkgNotIn(vs ...string) predicate.Room {
	return predicate.Room(sql.FieldNotIn(FieldBkg, vs...))
}

// BkgGT applies the GT predicate on the "bkg" field.
func BkgGT(v string) predicate.Room {
	return predicate.Room(sql.FieldGT(FieldBkg, v))
}

// BkgGTE applies the GTE predicate on the "bkg" field.
func BkgGTE(v string) predicate.Room {
	return predicate.Room(sql.FieldGTE(FieldBkg, v))
}

// BkgLT applies the LT predicate on the "bkg" field.
func BkgLT(v string) predicate.Room {
	return predicate.Room(sql.FieldLT(FieldBkg, v))
}

// BkgLTE applies the LTE predicate on the "bkg" field.
func BkgLTE(v string) predicate.Room {
	return predicate.Room(sql.FieldLTE(FieldBkg, v))
}

// BkgContains applies the Contains predicate on the "bkg" field.
func BkgContains(v string) predicate.Room {
	return predicate.Room(sql.FieldContains(FieldBkg, v))
}

// BkgHasPrefix applies the HasPrefix predicate on the "bkg" field.
func BkgHasPrefix(v string) predicate.Room {
	return predicate.Room(sql.FieldHasPrefix(FieldBkg, v))
}

// BkgHasSuffix applies the HasSuffix predicate on the "bkg" field.
func BkgHasSuffix(v string) predicate.Room {
	return predicate.Room(sql.FieldHasSuffix(FieldBkg, v))
}

// BkgEqualFold applies the EqualFold predicate on the "bkg" field.
func BkgEqualFold(v string) predicate.Room {
	return predicate.Room(sql.FieldEqualFold(FieldBkg, v))
}

// BkgContainsFold applies the ContainsFold predicate on the "bkg" field.
func BkgContainsFold(v string) predicate.Room {
	return predicate.Room(sql.FieldContainsFold(FieldBkg, v))
}

// HasRolls applies the HasEdge predicate on the "rolls" edge.
func HasRolls() predicate.Room {
	return predicate.Room(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, RollsTable, RollsColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasRollsWith applies the HasEdge predicate on the "rolls" edge with a given conditions (other predicates).
func HasRollsWith(preds ...predicate.Roll) predicate.Room {
	return predicate.Room(func(s *sql.Selector) {
		step := newRollsStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasOwner applies the HasEdge predicate on the "owner" edge.
func HasOwner() predicate.Room {
	return predicate.Room(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, OwnerTable, OwnerColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasOwnerWith applies the HasEdge predicate on the "owner" edge with a given conditions (other predicates).
func HasOwnerWith(preds ...predicate.User) predicate.Room {
	return predicate.Room(func(s *sql.Selector) {
		step := newOwnerStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.Room) predicate.Room {
	return predicate.Room(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.Room) predicate.Room {
	return predicate.Room(func(s *sql.Selector) {
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
func Not(p predicate.Room) predicate.Room {
	return predicate.Room(func(s *sql.Selector) {
		p(s.Not())
	})
}
