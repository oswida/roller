// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"rpgroll/ent/predicate"
	"rpgroll/ent/roll"
	"rpgroll/ent/room"
	"rpgroll/ent/user"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// RoomUpdate is the builder for updating Room entities.
type RoomUpdate struct {
	config
	hooks    []Hook
	mutation *RoomMutation
}

// Where appends a list predicates to the RoomUpdate builder.
func (ru *RoomUpdate) Where(ps ...predicate.Room) *RoomUpdate {
	ru.mutation.Where(ps...)
	return ru
}

// SetName sets the "name" field.
func (ru *RoomUpdate) SetName(s string) *RoomUpdate {
	ru.mutation.SetName(s)
	return ru
}

// SetBkg sets the "bkg" field.
func (ru *RoomUpdate) SetBkg(s string) *RoomUpdate {
	ru.mutation.SetBkg(s)
	return ru
}

// AddRollIDs adds the "rolls" edge to the Roll entity by IDs.
func (ru *RoomUpdate) AddRollIDs(ids ...string) *RoomUpdate {
	ru.mutation.AddRollIDs(ids...)
	return ru
}

// AddRolls adds the "rolls" edges to the Roll entity.
func (ru *RoomUpdate) AddRolls(r ...*Roll) *RoomUpdate {
	ids := make([]string, len(r))
	for i := range r {
		ids[i] = r[i].ID
	}
	return ru.AddRollIDs(ids...)
}

// SetOwnerID sets the "owner" edge to the User entity by ID.
func (ru *RoomUpdate) SetOwnerID(id uuid.UUID) *RoomUpdate {
	ru.mutation.SetOwnerID(id)
	return ru
}

// SetNillableOwnerID sets the "owner" edge to the User entity by ID if the given value is not nil.
func (ru *RoomUpdate) SetNillableOwnerID(id *uuid.UUID) *RoomUpdate {
	if id != nil {
		ru = ru.SetOwnerID(*id)
	}
	return ru
}

// SetOwner sets the "owner" edge to the User entity.
func (ru *RoomUpdate) SetOwner(u *User) *RoomUpdate {
	return ru.SetOwnerID(u.ID)
}

// Mutation returns the RoomMutation object of the builder.
func (ru *RoomUpdate) Mutation() *RoomMutation {
	return ru.mutation
}

// ClearRolls clears all "rolls" edges to the Roll entity.
func (ru *RoomUpdate) ClearRolls() *RoomUpdate {
	ru.mutation.ClearRolls()
	return ru
}

// RemoveRollIDs removes the "rolls" edge to Roll entities by IDs.
func (ru *RoomUpdate) RemoveRollIDs(ids ...string) *RoomUpdate {
	ru.mutation.RemoveRollIDs(ids...)
	return ru
}

// RemoveRolls removes "rolls" edges to Roll entities.
func (ru *RoomUpdate) RemoveRolls(r ...*Roll) *RoomUpdate {
	ids := make([]string, len(r))
	for i := range r {
		ids[i] = r[i].ID
	}
	return ru.RemoveRollIDs(ids...)
}

// ClearOwner clears the "owner" edge to the User entity.
func (ru *RoomUpdate) ClearOwner() *RoomUpdate {
	ru.mutation.ClearOwner()
	return ru
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (ru *RoomUpdate) Save(ctx context.Context) (int, error) {
	return withHooks(ctx, ru.sqlSave, ru.mutation, ru.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (ru *RoomUpdate) SaveX(ctx context.Context) int {
	affected, err := ru.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (ru *RoomUpdate) Exec(ctx context.Context) error {
	_, err := ru.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ru *RoomUpdate) ExecX(ctx context.Context) {
	if err := ru.Exec(ctx); err != nil {
		panic(err)
	}
}

func (ru *RoomUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(room.Table, room.Columns, sqlgraph.NewFieldSpec(room.FieldID, field.TypeUUID))
	if ps := ru.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := ru.mutation.Name(); ok {
		_spec.SetField(room.FieldName, field.TypeString, value)
	}
	if value, ok := ru.mutation.Bkg(); ok {
		_spec.SetField(room.FieldBkg, field.TypeString, value)
	}
	if ru.mutation.RollsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   room.RollsTable,
			Columns: []string{room.RollsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(roll.FieldID, field.TypeString),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := ru.mutation.RemovedRollsIDs(); len(nodes) > 0 && !ru.mutation.RollsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   room.RollsTable,
			Columns: []string{room.RollsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(roll.FieldID, field.TypeString),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := ru.mutation.RollsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   room.RollsTable,
			Columns: []string{room.RollsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(roll.FieldID, field.TypeString),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if ru.mutation.OwnerCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   room.OwnerTable,
			Columns: []string{room.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeUUID),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := ru.mutation.OwnerIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   room.OwnerTable,
			Columns: []string{room.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeUUID),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, ru.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{room.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	ru.mutation.done = true
	return n, nil
}

// RoomUpdateOne is the builder for updating a single Room entity.
type RoomUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *RoomMutation
}

// SetName sets the "name" field.
func (ruo *RoomUpdateOne) SetName(s string) *RoomUpdateOne {
	ruo.mutation.SetName(s)
	return ruo
}

// SetBkg sets the "bkg" field.
func (ruo *RoomUpdateOne) SetBkg(s string) *RoomUpdateOne {
	ruo.mutation.SetBkg(s)
	return ruo
}

// AddRollIDs adds the "rolls" edge to the Roll entity by IDs.
func (ruo *RoomUpdateOne) AddRollIDs(ids ...string) *RoomUpdateOne {
	ruo.mutation.AddRollIDs(ids...)
	return ruo
}

// AddRolls adds the "rolls" edges to the Roll entity.
func (ruo *RoomUpdateOne) AddRolls(r ...*Roll) *RoomUpdateOne {
	ids := make([]string, len(r))
	for i := range r {
		ids[i] = r[i].ID
	}
	return ruo.AddRollIDs(ids...)
}

// SetOwnerID sets the "owner" edge to the User entity by ID.
func (ruo *RoomUpdateOne) SetOwnerID(id uuid.UUID) *RoomUpdateOne {
	ruo.mutation.SetOwnerID(id)
	return ruo
}

// SetNillableOwnerID sets the "owner" edge to the User entity by ID if the given value is not nil.
func (ruo *RoomUpdateOne) SetNillableOwnerID(id *uuid.UUID) *RoomUpdateOne {
	if id != nil {
		ruo = ruo.SetOwnerID(*id)
	}
	return ruo
}

// SetOwner sets the "owner" edge to the User entity.
func (ruo *RoomUpdateOne) SetOwner(u *User) *RoomUpdateOne {
	return ruo.SetOwnerID(u.ID)
}

// Mutation returns the RoomMutation object of the builder.
func (ruo *RoomUpdateOne) Mutation() *RoomMutation {
	return ruo.mutation
}

// ClearRolls clears all "rolls" edges to the Roll entity.
func (ruo *RoomUpdateOne) ClearRolls() *RoomUpdateOne {
	ruo.mutation.ClearRolls()
	return ruo
}

// RemoveRollIDs removes the "rolls" edge to Roll entities by IDs.
func (ruo *RoomUpdateOne) RemoveRollIDs(ids ...string) *RoomUpdateOne {
	ruo.mutation.RemoveRollIDs(ids...)
	return ruo
}

// RemoveRolls removes "rolls" edges to Roll entities.
func (ruo *RoomUpdateOne) RemoveRolls(r ...*Roll) *RoomUpdateOne {
	ids := make([]string, len(r))
	for i := range r {
		ids[i] = r[i].ID
	}
	return ruo.RemoveRollIDs(ids...)
}

// ClearOwner clears the "owner" edge to the User entity.
func (ruo *RoomUpdateOne) ClearOwner() *RoomUpdateOne {
	ruo.mutation.ClearOwner()
	return ruo
}

// Where appends a list predicates to the RoomUpdate builder.
func (ruo *RoomUpdateOne) Where(ps ...predicate.Room) *RoomUpdateOne {
	ruo.mutation.Where(ps...)
	return ruo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (ruo *RoomUpdateOne) Select(field string, fields ...string) *RoomUpdateOne {
	ruo.fields = append([]string{field}, fields...)
	return ruo
}

// Save executes the query and returns the updated Room entity.
func (ruo *RoomUpdateOne) Save(ctx context.Context) (*Room, error) {
	return withHooks(ctx, ruo.sqlSave, ruo.mutation, ruo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (ruo *RoomUpdateOne) SaveX(ctx context.Context) *Room {
	node, err := ruo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (ruo *RoomUpdateOne) Exec(ctx context.Context) error {
	_, err := ruo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ruo *RoomUpdateOne) ExecX(ctx context.Context) {
	if err := ruo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (ruo *RoomUpdateOne) sqlSave(ctx context.Context) (_node *Room, err error) {
	_spec := sqlgraph.NewUpdateSpec(room.Table, room.Columns, sqlgraph.NewFieldSpec(room.FieldID, field.TypeUUID))
	id, ok := ruo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Room.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := ruo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, room.FieldID)
		for _, f := range fields {
			if !room.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != room.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := ruo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := ruo.mutation.Name(); ok {
		_spec.SetField(room.FieldName, field.TypeString, value)
	}
	if value, ok := ruo.mutation.Bkg(); ok {
		_spec.SetField(room.FieldBkg, field.TypeString, value)
	}
	if ruo.mutation.RollsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   room.RollsTable,
			Columns: []string{room.RollsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(roll.FieldID, field.TypeString),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := ruo.mutation.RemovedRollsIDs(); len(nodes) > 0 && !ruo.mutation.RollsCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   room.RollsTable,
			Columns: []string{room.RollsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(roll.FieldID, field.TypeString),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := ruo.mutation.RollsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   room.RollsTable,
			Columns: []string{room.RollsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(roll.FieldID, field.TypeString),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if ruo.mutation.OwnerCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   room.OwnerTable,
			Columns: []string{room.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeUUID),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := ruo.mutation.OwnerIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   room.OwnerTable,
			Columns: []string{room.OwnerColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeUUID),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &Room{config: ruo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, ruo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{room.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	ruo.mutation.done = true
	return _node, nil
}
