// Code generated by ent, DO NOT EDIT.

package roll

import (
	"rpgroll/ent/predicate"
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

// ID filters vertices based on their ID field.
func ID(id string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id string) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...string) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...string) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id string) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id string) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id string) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id string) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldID, id))
}

// IDEqualFold applies the EqualFold predicate on the ID field.
func IDEqualFold(id string) predicate.Roll {
	return predicate.Roll(sql.FieldEqualFold(FieldID, id))
}

// IDContainsFold applies the ContainsFold predicate on the ID field.
func IDContainsFold(id string) predicate.Roll {
	return predicate.Roll(sql.FieldContainsFold(FieldID, id))
}

// Tstamp applies equality check predicate on the "tstamp" field. It's identical to TstampEQ.
func Tstamp(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldTstamp, v))
}

// Time applies equality check predicate on the "time" field. It's identical to TimeEQ.
func Time(v time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldTime, v))
}

// Result applies equality check predicate on the "result" field. It's identical to ResultEQ.
func Result(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldResult, v))
}

// DiceColor applies equality check predicate on the "diceColor" field. It's identical to DiceColorEQ.
func DiceColor(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldDiceColor, v))
}

// DiceMaterial applies equality check predicate on the "diceMaterial" field. It's identical to DiceMaterialEQ.
func DiceMaterial(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldDiceMaterial, v))
}

// Comment applies equality check predicate on the "comment" field. It's identical to CommentEQ.
func Comment(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldComment, v))
}

// SuccessRule applies equality check predicate on the "successRule" field. It's identical to SuccessRuleEQ.
func SuccessRule(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldSuccessRule, v))
}

// SuccessTarget applies equality check predicate on the "successTarget" field. It's identical to SuccessTargetEQ.
func SuccessTarget(v int) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldSuccessTarget, v))
}

// Private applies equality check predicate on the "private" field. It's identical to PrivateEQ.
func Private(v bool) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldPrivate, v))
}

// Revealed applies equality check predicate on the "revealed" field. It's identical to RevealedEQ.
func Revealed(v bool) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldRevealed, v))
}

// TstampEQ applies the EQ predicate on the "tstamp" field.
func TstampEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldTstamp, v))
}

// TstampNEQ applies the NEQ predicate on the "tstamp" field.
func TstampNEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldTstamp, v))
}

// TstampIn applies the In predicate on the "tstamp" field.
func TstampIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldTstamp, vs...))
}

// TstampNotIn applies the NotIn predicate on the "tstamp" field.
func TstampNotIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldTstamp, vs...))
}

// TstampGT applies the GT predicate on the "tstamp" field.
func TstampGT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldTstamp, v))
}

// TstampGTE applies the GTE predicate on the "tstamp" field.
func TstampGTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldTstamp, v))
}

// TstampLT applies the LT predicate on the "tstamp" field.
func TstampLT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldTstamp, v))
}

// TstampLTE applies the LTE predicate on the "tstamp" field.
func TstampLTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldTstamp, v))
}

// TstampContains applies the Contains predicate on the "tstamp" field.
func TstampContains(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContains(FieldTstamp, v))
}

// TstampHasPrefix applies the HasPrefix predicate on the "tstamp" field.
func TstampHasPrefix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasPrefix(FieldTstamp, v))
}

// TstampHasSuffix applies the HasSuffix predicate on the "tstamp" field.
func TstampHasSuffix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasSuffix(FieldTstamp, v))
}

// TstampEqualFold applies the EqualFold predicate on the "tstamp" field.
func TstampEqualFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEqualFold(FieldTstamp, v))
}

// TstampContainsFold applies the ContainsFold predicate on the "tstamp" field.
func TstampContainsFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContainsFold(FieldTstamp, v))
}

// TimeEQ applies the EQ predicate on the "time" field.
func TimeEQ(v time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldTime, v))
}

// TimeNEQ applies the NEQ predicate on the "time" field.
func TimeNEQ(v time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldTime, v))
}

// TimeIn applies the In predicate on the "time" field.
func TimeIn(vs ...time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldTime, vs...))
}

// TimeNotIn applies the NotIn predicate on the "time" field.
func TimeNotIn(vs ...time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldTime, vs...))
}

// TimeGT applies the GT predicate on the "time" field.
func TimeGT(v time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldTime, v))
}

// TimeGTE applies the GTE predicate on the "time" field.
func TimeGTE(v time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldTime, v))
}

// TimeLT applies the LT predicate on the "time" field.
func TimeLT(v time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldTime, v))
}

// TimeLTE applies the LTE predicate on the "time" field.
func TimeLTE(v time.Time) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldTime, v))
}

// ResultEQ applies the EQ predicate on the "result" field.
func ResultEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldResult, v))
}

// ResultNEQ applies the NEQ predicate on the "result" field.
func ResultNEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldResult, v))
}

// ResultIn applies the In predicate on the "result" field.
func ResultIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldResult, vs...))
}

// ResultNotIn applies the NotIn predicate on the "result" field.
func ResultNotIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldResult, vs...))
}

// ResultGT applies the GT predicate on the "result" field.
func ResultGT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldResult, v))
}

// ResultGTE applies the GTE predicate on the "result" field.
func ResultGTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldResult, v))
}

// ResultLT applies the LT predicate on the "result" field.
func ResultLT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldResult, v))
}

// ResultLTE applies the LTE predicate on the "result" field.
func ResultLTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldResult, v))
}

// ResultContains applies the Contains predicate on the "result" field.
func ResultContains(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContains(FieldResult, v))
}

// ResultHasPrefix applies the HasPrefix predicate on the "result" field.
func ResultHasPrefix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasPrefix(FieldResult, v))
}

// ResultHasSuffix applies the HasSuffix predicate on the "result" field.
func ResultHasSuffix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasSuffix(FieldResult, v))
}

// ResultEqualFold applies the EqualFold predicate on the "result" field.
func ResultEqualFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEqualFold(FieldResult, v))
}

// ResultContainsFold applies the ContainsFold predicate on the "result" field.
func ResultContainsFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContainsFold(FieldResult, v))
}

// DiceColorEQ applies the EQ predicate on the "diceColor" field.
func DiceColorEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldDiceColor, v))
}

// DiceColorNEQ applies the NEQ predicate on the "diceColor" field.
func DiceColorNEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldDiceColor, v))
}

// DiceColorIn applies the In predicate on the "diceColor" field.
func DiceColorIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldDiceColor, vs...))
}

// DiceColorNotIn applies the NotIn predicate on the "diceColor" field.
func DiceColorNotIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldDiceColor, vs...))
}

// DiceColorGT applies the GT predicate on the "diceColor" field.
func DiceColorGT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldDiceColor, v))
}

// DiceColorGTE applies the GTE predicate on the "diceColor" field.
func DiceColorGTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldDiceColor, v))
}

// DiceColorLT applies the LT predicate on the "diceColor" field.
func DiceColorLT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldDiceColor, v))
}

// DiceColorLTE applies the LTE predicate on the "diceColor" field.
func DiceColorLTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldDiceColor, v))
}

// DiceColorContains applies the Contains predicate on the "diceColor" field.
func DiceColorContains(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContains(FieldDiceColor, v))
}

// DiceColorHasPrefix applies the HasPrefix predicate on the "diceColor" field.
func DiceColorHasPrefix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasPrefix(FieldDiceColor, v))
}

// DiceColorHasSuffix applies the HasSuffix predicate on the "diceColor" field.
func DiceColorHasSuffix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasSuffix(FieldDiceColor, v))
}

// DiceColorEqualFold applies the EqualFold predicate on the "diceColor" field.
func DiceColorEqualFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEqualFold(FieldDiceColor, v))
}

// DiceColorContainsFold applies the ContainsFold predicate on the "diceColor" field.
func DiceColorContainsFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContainsFold(FieldDiceColor, v))
}

// DiceMaterialEQ applies the EQ predicate on the "diceMaterial" field.
func DiceMaterialEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldDiceMaterial, v))
}

// DiceMaterialNEQ applies the NEQ predicate on the "diceMaterial" field.
func DiceMaterialNEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldDiceMaterial, v))
}

// DiceMaterialIn applies the In predicate on the "diceMaterial" field.
func DiceMaterialIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldDiceMaterial, vs...))
}

// DiceMaterialNotIn applies the NotIn predicate on the "diceMaterial" field.
func DiceMaterialNotIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldDiceMaterial, vs...))
}

// DiceMaterialGT applies the GT predicate on the "diceMaterial" field.
func DiceMaterialGT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldDiceMaterial, v))
}

// DiceMaterialGTE applies the GTE predicate on the "diceMaterial" field.
func DiceMaterialGTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldDiceMaterial, v))
}

// DiceMaterialLT applies the LT predicate on the "diceMaterial" field.
func DiceMaterialLT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldDiceMaterial, v))
}

// DiceMaterialLTE applies the LTE predicate on the "diceMaterial" field.
func DiceMaterialLTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldDiceMaterial, v))
}

// DiceMaterialContains applies the Contains predicate on the "diceMaterial" field.
func DiceMaterialContains(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContains(FieldDiceMaterial, v))
}

// DiceMaterialHasPrefix applies the HasPrefix predicate on the "diceMaterial" field.
func DiceMaterialHasPrefix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasPrefix(FieldDiceMaterial, v))
}

// DiceMaterialHasSuffix applies the HasSuffix predicate on the "diceMaterial" field.
func DiceMaterialHasSuffix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasSuffix(FieldDiceMaterial, v))
}

// DiceMaterialEqualFold applies the EqualFold predicate on the "diceMaterial" field.
func DiceMaterialEqualFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEqualFold(FieldDiceMaterial, v))
}

// DiceMaterialContainsFold applies the ContainsFold predicate on the "diceMaterial" field.
func DiceMaterialContainsFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContainsFold(FieldDiceMaterial, v))
}

// CommentEQ applies the EQ predicate on the "comment" field.
func CommentEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldComment, v))
}

// CommentNEQ applies the NEQ predicate on the "comment" field.
func CommentNEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldComment, v))
}

// CommentIn applies the In predicate on the "comment" field.
func CommentIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldComment, vs...))
}

// CommentNotIn applies the NotIn predicate on the "comment" field.
func CommentNotIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldComment, vs...))
}

// CommentGT applies the GT predicate on the "comment" field.
func CommentGT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldComment, v))
}

// CommentGTE applies the GTE predicate on the "comment" field.
func CommentGTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldComment, v))
}

// CommentLT applies the LT predicate on the "comment" field.
func CommentLT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldComment, v))
}

// CommentLTE applies the LTE predicate on the "comment" field.
func CommentLTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldComment, v))
}

// CommentContains applies the Contains predicate on the "comment" field.
func CommentContains(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContains(FieldComment, v))
}

// CommentHasPrefix applies the HasPrefix predicate on the "comment" field.
func CommentHasPrefix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasPrefix(FieldComment, v))
}

// CommentHasSuffix applies the HasSuffix predicate on the "comment" field.
func CommentHasSuffix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasSuffix(FieldComment, v))
}

// CommentEqualFold applies the EqualFold predicate on the "comment" field.
func CommentEqualFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEqualFold(FieldComment, v))
}

// CommentContainsFold applies the ContainsFold predicate on the "comment" field.
func CommentContainsFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContainsFold(FieldComment, v))
}

// SuccessRuleEQ applies the EQ predicate on the "successRule" field.
func SuccessRuleEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldSuccessRule, v))
}

// SuccessRuleNEQ applies the NEQ predicate on the "successRule" field.
func SuccessRuleNEQ(v string) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldSuccessRule, v))
}

// SuccessRuleIn applies the In predicate on the "successRule" field.
func SuccessRuleIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldSuccessRule, vs...))
}

// SuccessRuleNotIn applies the NotIn predicate on the "successRule" field.
func SuccessRuleNotIn(vs ...string) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldSuccessRule, vs...))
}

// SuccessRuleGT applies the GT predicate on the "successRule" field.
func SuccessRuleGT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldSuccessRule, v))
}

// SuccessRuleGTE applies the GTE predicate on the "successRule" field.
func SuccessRuleGTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldSuccessRule, v))
}

// SuccessRuleLT applies the LT predicate on the "successRule" field.
func SuccessRuleLT(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldSuccessRule, v))
}

// SuccessRuleLTE applies the LTE predicate on the "successRule" field.
func SuccessRuleLTE(v string) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldSuccessRule, v))
}

// SuccessRuleContains applies the Contains predicate on the "successRule" field.
func SuccessRuleContains(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContains(FieldSuccessRule, v))
}

// SuccessRuleHasPrefix applies the HasPrefix predicate on the "successRule" field.
func SuccessRuleHasPrefix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasPrefix(FieldSuccessRule, v))
}

// SuccessRuleHasSuffix applies the HasSuffix predicate on the "successRule" field.
func SuccessRuleHasSuffix(v string) predicate.Roll {
	return predicate.Roll(sql.FieldHasSuffix(FieldSuccessRule, v))
}

// SuccessRuleEqualFold applies the EqualFold predicate on the "successRule" field.
func SuccessRuleEqualFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldEqualFold(FieldSuccessRule, v))
}

// SuccessRuleContainsFold applies the ContainsFold predicate on the "successRule" field.
func SuccessRuleContainsFold(v string) predicate.Roll {
	return predicate.Roll(sql.FieldContainsFold(FieldSuccessRule, v))
}

// SuccessTargetEQ applies the EQ predicate on the "successTarget" field.
func SuccessTargetEQ(v int) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldSuccessTarget, v))
}

// SuccessTargetNEQ applies the NEQ predicate on the "successTarget" field.
func SuccessTargetNEQ(v int) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldSuccessTarget, v))
}

// SuccessTargetIn applies the In predicate on the "successTarget" field.
func SuccessTargetIn(vs ...int) predicate.Roll {
	return predicate.Roll(sql.FieldIn(FieldSuccessTarget, vs...))
}

// SuccessTargetNotIn applies the NotIn predicate on the "successTarget" field.
func SuccessTargetNotIn(vs ...int) predicate.Roll {
	return predicate.Roll(sql.FieldNotIn(FieldSuccessTarget, vs...))
}

// SuccessTargetGT applies the GT predicate on the "successTarget" field.
func SuccessTargetGT(v int) predicate.Roll {
	return predicate.Roll(sql.FieldGT(FieldSuccessTarget, v))
}

// SuccessTargetGTE applies the GTE predicate on the "successTarget" field.
func SuccessTargetGTE(v int) predicate.Roll {
	return predicate.Roll(sql.FieldGTE(FieldSuccessTarget, v))
}

// SuccessTargetLT applies the LT predicate on the "successTarget" field.
func SuccessTargetLT(v int) predicate.Roll {
	return predicate.Roll(sql.FieldLT(FieldSuccessTarget, v))
}

// SuccessTargetLTE applies the LTE predicate on the "successTarget" field.
func SuccessTargetLTE(v int) predicate.Roll {
	return predicate.Roll(sql.FieldLTE(FieldSuccessTarget, v))
}

// PrivateEQ applies the EQ predicate on the "private" field.
func PrivateEQ(v bool) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldPrivate, v))
}

// PrivateNEQ applies the NEQ predicate on the "private" field.
func PrivateNEQ(v bool) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldPrivate, v))
}

// RevealedEQ applies the EQ predicate on the "revealed" field.
func RevealedEQ(v bool) predicate.Roll {
	return predicate.Roll(sql.FieldEQ(FieldRevealed, v))
}

// RevealedNEQ applies the NEQ predicate on the "revealed" field.
func RevealedNEQ(v bool) predicate.Roll {
	return predicate.Roll(sql.FieldNEQ(FieldRevealed, v))
}

// HasOwner applies the HasEdge predicate on the "owner" edge.
func HasOwner() predicate.Roll {
	return predicate.Roll(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, OwnerTable, OwnerColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasOwnerWith applies the HasEdge predicate on the "owner" edge with a given conditions (other predicates).
func HasOwnerWith(preds ...predicate.User) predicate.Roll {
	return predicate.Roll(func(s *sql.Selector) {
		step := newOwnerStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasRoom applies the HasEdge predicate on the "room" edge.
func HasRoom() predicate.Roll {
	return predicate.Roll(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, RoomTable, RoomColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasRoomWith applies the HasEdge predicate on the "room" edge with a given conditions (other predicates).
func HasRoomWith(preds ...predicate.Room) predicate.Roll {
	return predicate.Roll(func(s *sql.Selector) {
		step := newRoomStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.Roll) predicate.Roll {
	return predicate.Roll(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.Roll) predicate.Roll {
	return predicate.Roll(func(s *sql.Selector) {
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
func Not(p predicate.Roll) predicate.Roll {
	return predicate.Roll(func(s *sql.Selector) {
		p(s.Not())
	})
}
