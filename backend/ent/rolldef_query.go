// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"
	"math"
	"rpgroll/ent/predicate"
	"rpgroll/ent/rolldef"
	"rpgroll/ent/user"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// RollDefQuery is the builder for querying RollDef entities.
type RollDefQuery struct {
	config
	ctx        *QueryContext
	order      []rolldef.OrderOption
	inters     []Interceptor
	predicates []predicate.RollDef
	withOwner  *UserQuery
	withFKs    bool
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the RollDefQuery builder.
func (rdq *RollDefQuery) Where(ps ...predicate.RollDef) *RollDefQuery {
	rdq.predicates = append(rdq.predicates, ps...)
	return rdq
}

// Limit the number of records to be returned by this query.
func (rdq *RollDefQuery) Limit(limit int) *RollDefQuery {
	rdq.ctx.Limit = &limit
	return rdq
}

// Offset to start from.
func (rdq *RollDefQuery) Offset(offset int) *RollDefQuery {
	rdq.ctx.Offset = &offset
	return rdq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (rdq *RollDefQuery) Unique(unique bool) *RollDefQuery {
	rdq.ctx.Unique = &unique
	return rdq
}

// Order specifies how the records should be ordered.
func (rdq *RollDefQuery) Order(o ...rolldef.OrderOption) *RollDefQuery {
	rdq.order = append(rdq.order, o...)
	return rdq
}

// QueryOwner chains the current query on the "owner" edge.
func (rdq *RollDefQuery) QueryOwner() *UserQuery {
	query := (&UserClient{config: rdq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := rdq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := rdq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(rolldef.Table, rolldef.FieldID, selector),
			sqlgraph.To(user.Table, user.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, rolldef.OwnerTable, rolldef.OwnerColumn),
		)
		fromU = sqlgraph.SetNeighbors(rdq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first RollDef entity from the query.
// Returns a *NotFoundError when no RollDef was found.
func (rdq *RollDefQuery) First(ctx context.Context) (*RollDef, error) {
	nodes, err := rdq.Limit(1).All(setContextOp(ctx, rdq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{rolldef.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (rdq *RollDefQuery) FirstX(ctx context.Context) *RollDef {
	node, err := rdq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first RollDef ID from the query.
// Returns a *NotFoundError when no RollDef ID was found.
func (rdq *RollDefQuery) FirstID(ctx context.Context) (id string, err error) {
	var ids []string
	if ids, err = rdq.Limit(1).IDs(setContextOp(ctx, rdq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{rolldef.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (rdq *RollDefQuery) FirstIDX(ctx context.Context) string {
	id, err := rdq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single RollDef entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one RollDef entity is found.
// Returns a *NotFoundError when no RollDef entities are found.
func (rdq *RollDefQuery) Only(ctx context.Context) (*RollDef, error) {
	nodes, err := rdq.Limit(2).All(setContextOp(ctx, rdq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{rolldef.Label}
	default:
		return nil, &NotSingularError{rolldef.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (rdq *RollDefQuery) OnlyX(ctx context.Context) *RollDef {
	node, err := rdq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only RollDef ID in the query.
// Returns a *NotSingularError when more than one RollDef ID is found.
// Returns a *NotFoundError when no entities are found.
func (rdq *RollDefQuery) OnlyID(ctx context.Context) (id string, err error) {
	var ids []string
	if ids, err = rdq.Limit(2).IDs(setContextOp(ctx, rdq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{rolldef.Label}
	default:
		err = &NotSingularError{rolldef.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (rdq *RollDefQuery) OnlyIDX(ctx context.Context) string {
	id, err := rdq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of RollDefs.
func (rdq *RollDefQuery) All(ctx context.Context) ([]*RollDef, error) {
	ctx = setContextOp(ctx, rdq.ctx, "All")
	if err := rdq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*RollDef, *RollDefQuery]()
	return withInterceptors[[]*RollDef](ctx, rdq, qr, rdq.inters)
}

// AllX is like All, but panics if an error occurs.
func (rdq *RollDefQuery) AllX(ctx context.Context) []*RollDef {
	nodes, err := rdq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of RollDef IDs.
func (rdq *RollDefQuery) IDs(ctx context.Context) (ids []string, err error) {
	if rdq.ctx.Unique == nil && rdq.path != nil {
		rdq.Unique(true)
	}
	ctx = setContextOp(ctx, rdq.ctx, "IDs")
	if err = rdq.Select(rolldef.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (rdq *RollDefQuery) IDsX(ctx context.Context) []string {
	ids, err := rdq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (rdq *RollDefQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, rdq.ctx, "Count")
	if err := rdq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, rdq, querierCount[*RollDefQuery](), rdq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (rdq *RollDefQuery) CountX(ctx context.Context) int {
	count, err := rdq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (rdq *RollDefQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, rdq.ctx, "Exist")
	switch _, err := rdq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (rdq *RollDefQuery) ExistX(ctx context.Context) bool {
	exist, err := rdq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the RollDefQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (rdq *RollDefQuery) Clone() *RollDefQuery {
	if rdq == nil {
		return nil
	}
	return &RollDefQuery{
		config:     rdq.config,
		ctx:        rdq.ctx.Clone(),
		order:      append([]rolldef.OrderOption{}, rdq.order...),
		inters:     append([]Interceptor{}, rdq.inters...),
		predicates: append([]predicate.RollDef{}, rdq.predicates...),
		withOwner:  rdq.withOwner.Clone(),
		// clone intermediate query.
		sql:  rdq.sql.Clone(),
		path: rdq.path,
	}
}

// WithOwner tells the query-builder to eager-load the nodes that are connected to
// the "owner" edge. The optional arguments are used to configure the query builder of the edge.
func (rdq *RollDefQuery) WithOwner(opts ...func(*UserQuery)) *RollDefQuery {
	query := (&UserClient{config: rdq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	rdq.withOwner = query
	return rdq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.RollDef.Query().
//		GroupBy(rolldef.FieldName).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
func (rdq *RollDefQuery) GroupBy(field string, fields ...string) *RollDefGroupBy {
	rdq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &RollDefGroupBy{build: rdq}
	grbuild.flds = &rdq.ctx.Fields
	grbuild.label = rolldef.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		Name string `json:"name,omitempty"`
//	}
//
//	client.RollDef.Query().
//		Select(rolldef.FieldName).
//		Scan(ctx, &v)
func (rdq *RollDefQuery) Select(fields ...string) *RollDefSelect {
	rdq.ctx.Fields = append(rdq.ctx.Fields, fields...)
	sbuild := &RollDefSelect{RollDefQuery: rdq}
	sbuild.label = rolldef.Label
	sbuild.flds, sbuild.scan = &rdq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a RollDefSelect configured with the given aggregations.
func (rdq *RollDefQuery) Aggregate(fns ...AggregateFunc) *RollDefSelect {
	return rdq.Select().Aggregate(fns...)
}

func (rdq *RollDefQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range rdq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, rdq); err != nil {
				return err
			}
		}
	}
	for _, f := range rdq.ctx.Fields {
		if !rolldef.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if rdq.path != nil {
		prev, err := rdq.path(ctx)
		if err != nil {
			return err
		}
		rdq.sql = prev
	}
	return nil
}

func (rdq *RollDefQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*RollDef, error) {
	var (
		nodes       = []*RollDef{}
		withFKs     = rdq.withFKs
		_spec       = rdq.querySpec()
		loadedTypes = [1]bool{
			rdq.withOwner != nil,
		}
	)
	if rdq.withOwner != nil {
		withFKs = true
	}
	if withFKs {
		_spec.Node.Columns = append(_spec.Node.Columns, rolldef.ForeignKeys...)
	}
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*RollDef).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &RollDef{config: rdq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, rdq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	if query := rdq.withOwner; query != nil {
		if err := rdq.loadOwner(ctx, query, nodes, nil,
			func(n *RollDef, e *User) { n.Edges.Owner = e }); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (rdq *RollDefQuery) loadOwner(ctx context.Context, query *UserQuery, nodes []*RollDef, init func(*RollDef), assign func(*RollDef, *User)) error {
	ids := make([]uuid.UUID, 0, len(nodes))
	nodeids := make(map[uuid.UUID][]*RollDef)
	for i := range nodes {
		if nodes[i].user_rolldefs == nil {
			continue
		}
		fk := *nodes[i].user_rolldefs
		if _, ok := nodeids[fk]; !ok {
			ids = append(ids, fk)
		}
		nodeids[fk] = append(nodeids[fk], nodes[i])
	}
	if len(ids) == 0 {
		return nil
	}
	query.Where(user.IDIn(ids...))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		nodes, ok := nodeids[n.ID]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "user_rolldefs" returned %v`, n.ID)
		}
		for i := range nodes {
			assign(nodes[i], n)
		}
	}
	return nil
}

func (rdq *RollDefQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := rdq.querySpec()
	_spec.Node.Columns = rdq.ctx.Fields
	if len(rdq.ctx.Fields) > 0 {
		_spec.Unique = rdq.ctx.Unique != nil && *rdq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, rdq.driver, _spec)
}

func (rdq *RollDefQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := sqlgraph.NewQuerySpec(rolldef.Table, rolldef.Columns, sqlgraph.NewFieldSpec(rolldef.FieldID, field.TypeString))
	_spec.From = rdq.sql
	if unique := rdq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	} else if rdq.path != nil {
		_spec.Unique = true
	}
	if fields := rdq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, rolldef.FieldID)
		for i := range fields {
			if fields[i] != rolldef.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := rdq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := rdq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := rdq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := rdq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (rdq *RollDefQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(rdq.driver.Dialect())
	t1 := builder.Table(rolldef.Table)
	columns := rdq.ctx.Fields
	if len(columns) == 0 {
		columns = rolldef.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if rdq.sql != nil {
		selector = rdq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if rdq.ctx.Unique != nil && *rdq.ctx.Unique {
		selector.Distinct()
	}
	for _, p := range rdq.predicates {
		p(selector)
	}
	for _, p := range rdq.order {
		p(selector)
	}
	if offset := rdq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := rdq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// RollDefGroupBy is the group-by builder for RollDef entities.
type RollDefGroupBy struct {
	selector
	build *RollDefQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (rdgb *RollDefGroupBy) Aggregate(fns ...AggregateFunc) *RollDefGroupBy {
	rdgb.fns = append(rdgb.fns, fns...)
	return rdgb
}

// Scan applies the selector query and scans the result into the given value.
func (rdgb *RollDefGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, rdgb.build.ctx, "GroupBy")
	if err := rdgb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*RollDefQuery, *RollDefGroupBy](ctx, rdgb.build, rdgb, rdgb.build.inters, v)
}

func (rdgb *RollDefGroupBy) sqlScan(ctx context.Context, root *RollDefQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(rdgb.fns))
	for _, fn := range rdgb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*rdgb.flds)+len(rdgb.fns))
		for _, f := range *rdgb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*rdgb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := rdgb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// RollDefSelect is the builder for selecting fields of RollDef entities.
type RollDefSelect struct {
	*RollDefQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (rds *RollDefSelect) Aggregate(fns ...AggregateFunc) *RollDefSelect {
	rds.fns = append(rds.fns, fns...)
	return rds
}

// Scan applies the selector query and scans the result into the given value.
func (rds *RollDefSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, rds.ctx, "Select")
	if err := rds.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*RollDefQuery, *RollDefSelect](ctx, rds.RollDefQuery, rds, rds.inters, v)
}

func (rds *RollDefSelect) sqlScan(ctx context.Context, root *RollDefQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(rds.fns))
	for _, fn := range rds.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*rds.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := rds.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}
