// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"rpgroll/ent/charsheet"
	"rpgroll/ent/predicate"
	"rpgroll/ent/user"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// CharsheetUpdate is the builder for updating Charsheet entities.
type CharsheetUpdate struct {
	config
	hooks    []Hook
	mutation *CharsheetMutation
}

// Where appends a list predicates to the CharsheetUpdate builder.
func (cu *CharsheetUpdate) Where(ps ...predicate.Charsheet) *CharsheetUpdate {
	cu.mutation.Where(ps...)
	return cu
}

// SetName sets the "name" field.
func (cu *CharsheetUpdate) SetName(s string) *CharsheetUpdate {
	cu.mutation.SetName(s)
	return cu
}

// SetTemplate sets the "template" field.
func (cu *CharsheetUpdate) SetTemplate(s string) *CharsheetUpdate {
	cu.mutation.SetTemplate(s)
	return cu
}

// SetValues sets the "values" field.
func (cu *CharsheetUpdate) SetValues(m map[string]interface{}) *CharsheetUpdate {
	cu.mutation.SetValues(m)
	return cu
}

// SetShared sets the "shared" field.
func (cu *CharsheetUpdate) SetShared(b bool) *CharsheetUpdate {
	cu.mutation.SetShared(b)
	return cu
}

// SetPortrait sets the "portrait" field.
func (cu *CharsheetUpdate) SetPortrait(s string) *CharsheetUpdate {
	cu.mutation.SetPortrait(s)
	return cu
}

// SetOwnerID sets the "owner" edge to the User entity by ID.
func (cu *CharsheetUpdate) SetOwnerID(id string) *CharsheetUpdate {
	cu.mutation.SetOwnerID(id)
	return cu
}

// SetNillableOwnerID sets the "owner" edge to the User entity by ID if the given value is not nil.
func (cu *CharsheetUpdate) SetNillableOwnerID(id *string) *CharsheetUpdate {
	if id != nil {
		cu = cu.SetOwnerID(*id)
	}
	return cu
}

// SetOwner sets the "owner" edge to the User entity.
func (cu *CharsheetUpdate) SetOwner(u *User) *CharsheetUpdate {
	return cu.SetOwnerID(u.ID)
}

// Mutation returns the CharsheetMutation object of the builder.
func (cu *CharsheetUpdate) Mutation() *CharsheetMutation {
	return cu.mutation
}

// ClearOwner clears the "owner" edge to the User entity.
func (cu *CharsheetUpdate) ClearOwner() *CharsheetUpdate {
	cu.mutation.ClearOwner()
	return cu
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (cu *CharsheetUpdate) Save(ctx context.Context) (int, error) {
	return withHooks(ctx, cu.sqlSave, cu.mutation, cu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (cu *CharsheetUpdate) SaveX(ctx context.Context) int {
	affected, err := cu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (cu *CharsheetUpdate) Exec(ctx context.Context) error {
	_, err := cu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (cu *CharsheetUpdate) ExecX(ctx context.Context) {
	if err := cu.Exec(ctx); err != nil {
		panic(err)
	}
}

func (cu *CharsheetUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(charsheet.Table, charsheet.Columns, sqlgraph.NewFieldSpec(charsheet.FieldID, field.TypeString))
	if ps := cu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := cu.mutation.Name(); ok {
		_spec.SetField(charsheet.FieldName, field.TypeString, value)
	}
	if value, ok := cu.mutation.Template(); ok {
		_spec.SetField(charsheet.FieldTemplate, field.TypeString, value)
	}
	if value, ok := cu.mutation.Values(); ok {
		_spec.SetField(charsheet.FieldValues, field.TypeJSON, value)
	}
	if value, ok := cu.mutation.Shared(); ok {
		_spec.SetField(charsheet.FieldShared, field.TypeBool, value)
	}
	if value, ok := cu.mutation.Portrait(); ok {
		_spec.SetField(charsheet.FieldPortrait, field.TypeString, value)
	}
	if cu.mutation.OwnerCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   charsheet.OwnerTable,
			Columns: []string{charsheet.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeString),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := cu.mutation.OwnerIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   charsheet.OwnerTable,
			Columns: []string{charsheet.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeString),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, cu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{charsheet.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	cu.mutation.done = true
	return n, nil
}

// CharsheetUpdateOne is the builder for updating a single Charsheet entity.
type CharsheetUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *CharsheetMutation
}

// SetName sets the "name" field.
func (cuo *CharsheetUpdateOne) SetName(s string) *CharsheetUpdateOne {
	cuo.mutation.SetName(s)
	return cuo
}

// SetTemplate sets the "template" field.
func (cuo *CharsheetUpdateOne) SetTemplate(s string) *CharsheetUpdateOne {
	cuo.mutation.SetTemplate(s)
	return cuo
}

// SetValues sets the "values" field.
func (cuo *CharsheetUpdateOne) SetValues(m map[string]interface{}) *CharsheetUpdateOne {
	cuo.mutation.SetValues(m)
	return cuo
}

// SetShared sets the "shared" field.
func (cuo *CharsheetUpdateOne) SetShared(b bool) *CharsheetUpdateOne {
	cuo.mutation.SetShared(b)
	return cuo
}

// SetPortrait sets the "portrait" field.
func (cuo *CharsheetUpdateOne) SetPortrait(s string) *CharsheetUpdateOne {
	cuo.mutation.SetPortrait(s)
	return cuo
}

// SetOwnerID sets the "owner" edge to the User entity by ID.
func (cuo *CharsheetUpdateOne) SetOwnerID(id string) *CharsheetUpdateOne {
	cuo.mutation.SetOwnerID(id)
	return cuo
}

// SetNillableOwnerID sets the "owner" edge to the User entity by ID if the given value is not nil.
func (cuo *CharsheetUpdateOne) SetNillableOwnerID(id *string) *CharsheetUpdateOne {
	if id != nil {
		cuo = cuo.SetOwnerID(*id)
	}
	return cuo
}

// SetOwner sets the "owner" edge to the User entity.
func (cuo *CharsheetUpdateOne) SetOwner(u *User) *CharsheetUpdateOne {
	return cuo.SetOwnerID(u.ID)
}

// Mutation returns the CharsheetMutation object of the builder.
func (cuo *CharsheetUpdateOne) Mutation() *CharsheetMutation {
	return cuo.mutation
}

// ClearOwner clears the "owner" edge to the User entity.
func (cuo *CharsheetUpdateOne) ClearOwner() *CharsheetUpdateOne {
	cuo.mutation.ClearOwner()
	return cuo
}

// Where appends a list predicates to the CharsheetUpdate builder.
func (cuo *CharsheetUpdateOne) Where(ps ...predicate.Charsheet) *CharsheetUpdateOne {
	cuo.mutation.Where(ps...)
	return cuo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (cuo *CharsheetUpdateOne) Select(field string, fields ...string) *CharsheetUpdateOne {
	cuo.fields = append([]string{field}, fields...)
	return cuo
}

// Save executes the query and returns the updated Charsheet entity.
func (cuo *CharsheetUpdateOne) Save(ctx context.Context) (*Charsheet, error) {
	return withHooks(ctx, cuo.sqlSave, cuo.mutation, cuo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (cuo *CharsheetUpdateOne) SaveX(ctx context.Context) *Charsheet {
	node, err := cuo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (cuo *CharsheetUpdateOne) Exec(ctx context.Context) error {
	_, err := cuo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (cuo *CharsheetUpdateOne) ExecX(ctx context.Context) {
	if err := cuo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (cuo *CharsheetUpdateOne) sqlSave(ctx context.Context) (_node *Charsheet, err error) {
	_spec := sqlgraph.NewUpdateSpec(charsheet.Table, charsheet.Columns, sqlgraph.NewFieldSpec(charsheet.FieldID, field.TypeString))
	id, ok := cuo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Charsheet.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := cuo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, charsheet.FieldID)
		for _, f := range fields {
			if !charsheet.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != charsheet.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := cuo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := cuo.mutation.Name(); ok {
		_spec.SetField(charsheet.FieldName, field.TypeString, value)
	}
	if value, ok := cuo.mutation.Template(); ok {
		_spec.SetField(charsheet.FieldTemplate, field.TypeString, value)
	}
	if value, ok := cuo.mutation.Values(); ok {
		_spec.SetField(charsheet.FieldValues, field.TypeJSON, value)
	}
	if value, ok := cuo.mutation.Shared(); ok {
		_spec.SetField(charsheet.FieldShared, field.TypeBool, value)
	}
	if value, ok := cuo.mutation.Portrait(); ok {
		_spec.SetField(charsheet.FieldPortrait, field.TypeString, value)
	}
	if cuo.mutation.OwnerCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   charsheet.OwnerTable,
			Columns: []string{charsheet.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeString),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := cuo.mutation.OwnerIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   charsheet.OwnerTable,
			Columns: []string{charsheet.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeString),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &Charsheet{config: cuo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, cuo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{charsheet.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	cuo.mutation.done = true
	return _node, nil
}
