// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"log"

	"rpgroll/ent/migrate"

	"rpgroll/ent/charsheet"
	"rpgroll/ent/roll"
	"rpgroll/ent/rolldef"
	"rpgroll/ent/room"
	"rpgroll/ent/user"

	"entgo.io/ent"
	"entgo.io/ent/dialect"
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

// Client is the client that holds all ent builders.
type Client struct {
	config
	// Schema is the client for creating, migrating and dropping schema.
	Schema *migrate.Schema
	// Charsheet is the client for interacting with the Charsheet builders.
	Charsheet *CharsheetClient
	// Roll is the client for interacting with the Roll builders.
	Roll *RollClient
	// RollDef is the client for interacting with the RollDef builders.
	RollDef *RollDefClient
	// Room is the client for interacting with the Room builders.
	Room *RoomClient
	// User is the client for interacting with the User builders.
	User *UserClient
}

// NewClient creates a new client configured with the given options.
func NewClient(opts ...Option) *Client {
	cfg := config{log: log.Println, hooks: &hooks{}, inters: &inters{}}
	cfg.options(opts...)
	client := &Client{config: cfg}
	client.init()
	return client
}

func (c *Client) init() {
	c.Schema = migrate.NewSchema(c.driver)
	c.Charsheet = NewCharsheetClient(c.config)
	c.Roll = NewRollClient(c.config)
	c.RollDef = NewRollDefClient(c.config)
	c.Room = NewRoomClient(c.config)
	c.User = NewUserClient(c.config)
}

type (
	// config is the configuration for the client and its builder.
	config struct {
		// driver used for executing database requests.
		driver dialect.Driver
		// debug enable a debug logging.
		debug bool
		// log used for logging on debug mode.
		log func(...any)
		// hooks to execute on mutations.
		hooks *hooks
		// interceptors to execute on queries.
		inters *inters
	}
	// Option function to configure the client.
	Option func(*config)
)

// options applies the options on the config object.
func (c *config) options(opts ...Option) {
	for _, opt := range opts {
		opt(c)
	}
	if c.debug {
		c.driver = dialect.Debug(c.driver, c.log)
	}
}

// Debug enables debug logging on the ent.Driver.
func Debug() Option {
	return func(c *config) {
		c.debug = true
	}
}

// Log sets the logging function for debug mode.
func Log(fn func(...any)) Option {
	return func(c *config) {
		c.log = fn
	}
}

// Driver configures the client driver.
func Driver(driver dialect.Driver) Option {
	return func(c *config) {
		c.driver = driver
	}
}

// Open opens a database/sql.DB specified by the driver name and
// the data source name, and returns a new client attached to it.
// Optional parameters can be added for configuring the client.
func Open(driverName, dataSourceName string, options ...Option) (*Client, error) {
	switch driverName {
	case dialect.MySQL, dialect.Postgres, dialect.SQLite:
		drv, err := sql.Open(driverName, dataSourceName)
		if err != nil {
			return nil, err
		}
		return NewClient(append(options, Driver(drv))...), nil
	default:
		return nil, fmt.Errorf("unsupported driver: %q", driverName)
	}
}

// Tx returns a new transactional client. The provided context
// is used until the transaction is committed or rolled back.
func (c *Client) Tx(ctx context.Context) (*Tx, error) {
	if _, ok := c.driver.(*txDriver); ok {
		return nil, errors.New("ent: cannot start a transaction within a transaction")
	}
	tx, err := newTx(ctx, c.driver)
	if err != nil {
		return nil, fmt.Errorf("ent: starting a transaction: %w", err)
	}
	cfg := c.config
	cfg.driver = tx
	return &Tx{
		ctx:       ctx,
		config:    cfg,
		Charsheet: NewCharsheetClient(cfg),
		Roll:      NewRollClient(cfg),
		RollDef:   NewRollDefClient(cfg),
		Room:      NewRoomClient(cfg),
		User:      NewUserClient(cfg),
	}, nil
}

// BeginTx returns a transactional client with specified options.
func (c *Client) BeginTx(ctx context.Context, opts *sql.TxOptions) (*Tx, error) {
	if _, ok := c.driver.(*txDriver); ok {
		return nil, errors.New("ent: cannot start a transaction within a transaction")
	}
	tx, err := c.driver.(interface {
		BeginTx(context.Context, *sql.TxOptions) (dialect.Tx, error)
	}).BeginTx(ctx, opts)
	if err != nil {
		return nil, fmt.Errorf("ent: starting a transaction: %w", err)
	}
	cfg := c.config
	cfg.driver = &txDriver{tx: tx, drv: c.driver}
	return &Tx{
		ctx:       ctx,
		config:    cfg,
		Charsheet: NewCharsheetClient(cfg),
		Roll:      NewRollClient(cfg),
		RollDef:   NewRollDefClient(cfg),
		Room:      NewRoomClient(cfg),
		User:      NewUserClient(cfg),
	}, nil
}

// Debug returns a new debug-client. It's used to get verbose logging on specific operations.
//
//	client.Debug().
//		Charsheet.
//		Query().
//		Count(ctx)
func (c *Client) Debug() *Client {
	if c.debug {
		return c
	}
	cfg := c.config
	cfg.driver = dialect.Debug(c.driver, c.log)
	client := &Client{config: cfg}
	client.init()
	return client
}

// Close closes the database connection and prevents new queries from starting.
func (c *Client) Close() error {
	return c.driver.Close()
}

// Use adds the mutation hooks to all the entity clients.
// In order to add hooks to a specific client, call: `client.Node.Use(...)`.
func (c *Client) Use(hooks ...Hook) {
	c.Charsheet.Use(hooks...)
	c.Roll.Use(hooks...)
	c.RollDef.Use(hooks...)
	c.Room.Use(hooks...)
	c.User.Use(hooks...)
}

// Intercept adds the query interceptors to all the entity clients.
// In order to add interceptors to a specific client, call: `client.Node.Intercept(...)`.
func (c *Client) Intercept(interceptors ...Interceptor) {
	c.Charsheet.Intercept(interceptors...)
	c.Roll.Intercept(interceptors...)
	c.RollDef.Intercept(interceptors...)
	c.Room.Intercept(interceptors...)
	c.User.Intercept(interceptors...)
}

// Mutate implements the ent.Mutator interface.
func (c *Client) Mutate(ctx context.Context, m Mutation) (Value, error) {
	switch m := m.(type) {
	case *CharsheetMutation:
		return c.Charsheet.mutate(ctx, m)
	case *RollMutation:
		return c.Roll.mutate(ctx, m)
	case *RollDefMutation:
		return c.RollDef.mutate(ctx, m)
	case *RoomMutation:
		return c.Room.mutate(ctx, m)
	case *UserMutation:
		return c.User.mutate(ctx, m)
	default:
		return nil, fmt.Errorf("ent: unknown mutation type %T", m)
	}
}

// CharsheetClient is a client for the Charsheet schema.
type CharsheetClient struct {
	config
}

// NewCharsheetClient returns a client for the Charsheet from the given config.
func NewCharsheetClient(c config) *CharsheetClient {
	return &CharsheetClient{config: c}
}

// Use adds a list of mutation hooks to the hooks stack.
// A call to `Use(f, g, h)` equals to `charsheet.Hooks(f(g(h())))`.
func (c *CharsheetClient) Use(hooks ...Hook) {
	c.hooks.Charsheet = append(c.hooks.Charsheet, hooks...)
}

// Intercept adds a list of query interceptors to the interceptors stack.
// A call to `Intercept(f, g, h)` equals to `charsheet.Intercept(f(g(h())))`.
func (c *CharsheetClient) Intercept(interceptors ...Interceptor) {
	c.inters.Charsheet = append(c.inters.Charsheet, interceptors...)
}

// Create returns a builder for creating a Charsheet entity.
func (c *CharsheetClient) Create() *CharsheetCreate {
	mutation := newCharsheetMutation(c.config, OpCreate)
	return &CharsheetCreate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// CreateBulk returns a builder for creating a bulk of Charsheet entities.
func (c *CharsheetClient) CreateBulk(builders ...*CharsheetCreate) *CharsheetCreateBulk {
	return &CharsheetCreateBulk{config: c.config, builders: builders}
}

// Update returns an update builder for Charsheet.
func (c *CharsheetClient) Update() *CharsheetUpdate {
	mutation := newCharsheetMutation(c.config, OpUpdate)
	return &CharsheetUpdate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOne returns an update builder for the given entity.
func (c *CharsheetClient) UpdateOne(ch *Charsheet) *CharsheetUpdateOne {
	mutation := newCharsheetMutation(c.config, OpUpdateOne, withCharsheet(ch))
	return &CharsheetUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOneID returns an update builder for the given id.
func (c *CharsheetClient) UpdateOneID(id string) *CharsheetUpdateOne {
	mutation := newCharsheetMutation(c.config, OpUpdateOne, withCharsheetID(id))
	return &CharsheetUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// Delete returns a delete builder for Charsheet.
func (c *CharsheetClient) Delete() *CharsheetDelete {
	mutation := newCharsheetMutation(c.config, OpDelete)
	return &CharsheetDelete{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// DeleteOne returns a builder for deleting the given entity.
func (c *CharsheetClient) DeleteOne(ch *Charsheet) *CharsheetDeleteOne {
	return c.DeleteOneID(ch.ID)
}

// DeleteOneID returns a builder for deleting the given entity by its id.
func (c *CharsheetClient) DeleteOneID(id string) *CharsheetDeleteOne {
	builder := c.Delete().Where(charsheet.ID(id))
	builder.mutation.id = &id
	builder.mutation.op = OpDeleteOne
	return &CharsheetDeleteOne{builder}
}

// Query returns a query builder for Charsheet.
func (c *CharsheetClient) Query() *CharsheetQuery {
	return &CharsheetQuery{
		config: c.config,
		ctx:    &QueryContext{Type: TypeCharsheet},
		inters: c.Interceptors(),
	}
}

// Get returns a Charsheet entity by its id.
func (c *CharsheetClient) Get(ctx context.Context, id string) (*Charsheet, error) {
	return c.Query().Where(charsheet.ID(id)).Only(ctx)
}

// GetX is like Get, but panics if an error occurs.
func (c *CharsheetClient) GetX(ctx context.Context, id string) *Charsheet {
	obj, err := c.Get(ctx, id)
	if err != nil {
		panic(err)
	}
	return obj
}

// QueryOwner queries the owner edge of a Charsheet.
func (c *CharsheetClient) QueryOwner(ch *Charsheet) *UserQuery {
	query := (&UserClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := ch.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(charsheet.Table, charsheet.FieldID, id),
			sqlgraph.To(user.Table, user.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, charsheet.OwnerTable, charsheet.OwnerColumn),
		)
		fromV = sqlgraph.Neighbors(ch.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// Hooks returns the client hooks.
func (c *CharsheetClient) Hooks() []Hook {
	return c.hooks.Charsheet
}

// Interceptors returns the client interceptors.
func (c *CharsheetClient) Interceptors() []Interceptor {
	return c.inters.Charsheet
}

func (c *CharsheetClient) mutate(ctx context.Context, m *CharsheetMutation) (Value, error) {
	switch m.Op() {
	case OpCreate:
		return (&CharsheetCreate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdate:
		return (&CharsheetUpdate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdateOne:
		return (&CharsheetUpdateOne{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpDelete, OpDeleteOne:
		return (&CharsheetDelete{config: c.config, hooks: c.Hooks(), mutation: m}).Exec(ctx)
	default:
		return nil, fmt.Errorf("ent: unknown Charsheet mutation op: %q", m.Op())
	}
}

// RollClient is a client for the Roll schema.
type RollClient struct {
	config
}

// NewRollClient returns a client for the Roll from the given config.
func NewRollClient(c config) *RollClient {
	return &RollClient{config: c}
}

// Use adds a list of mutation hooks to the hooks stack.
// A call to `Use(f, g, h)` equals to `roll.Hooks(f(g(h())))`.
func (c *RollClient) Use(hooks ...Hook) {
	c.hooks.Roll = append(c.hooks.Roll, hooks...)
}

// Intercept adds a list of query interceptors to the interceptors stack.
// A call to `Intercept(f, g, h)` equals to `roll.Intercept(f(g(h())))`.
func (c *RollClient) Intercept(interceptors ...Interceptor) {
	c.inters.Roll = append(c.inters.Roll, interceptors...)
}

// Create returns a builder for creating a Roll entity.
func (c *RollClient) Create() *RollCreate {
	mutation := newRollMutation(c.config, OpCreate)
	return &RollCreate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// CreateBulk returns a builder for creating a bulk of Roll entities.
func (c *RollClient) CreateBulk(builders ...*RollCreate) *RollCreateBulk {
	return &RollCreateBulk{config: c.config, builders: builders}
}

// Update returns an update builder for Roll.
func (c *RollClient) Update() *RollUpdate {
	mutation := newRollMutation(c.config, OpUpdate)
	return &RollUpdate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOne returns an update builder for the given entity.
func (c *RollClient) UpdateOne(r *Roll) *RollUpdateOne {
	mutation := newRollMutation(c.config, OpUpdateOne, withRoll(r))
	return &RollUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOneID returns an update builder for the given id.
func (c *RollClient) UpdateOneID(id string) *RollUpdateOne {
	mutation := newRollMutation(c.config, OpUpdateOne, withRollID(id))
	return &RollUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// Delete returns a delete builder for Roll.
func (c *RollClient) Delete() *RollDelete {
	mutation := newRollMutation(c.config, OpDelete)
	return &RollDelete{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// DeleteOne returns a builder for deleting the given entity.
func (c *RollClient) DeleteOne(r *Roll) *RollDeleteOne {
	return c.DeleteOneID(r.ID)
}

// DeleteOneID returns a builder for deleting the given entity by its id.
func (c *RollClient) DeleteOneID(id string) *RollDeleteOne {
	builder := c.Delete().Where(roll.ID(id))
	builder.mutation.id = &id
	builder.mutation.op = OpDeleteOne
	return &RollDeleteOne{builder}
}

// Query returns a query builder for Roll.
func (c *RollClient) Query() *RollQuery {
	return &RollQuery{
		config: c.config,
		ctx:    &QueryContext{Type: TypeRoll},
		inters: c.Interceptors(),
	}
}

// Get returns a Roll entity by its id.
func (c *RollClient) Get(ctx context.Context, id string) (*Roll, error) {
	return c.Query().Where(roll.ID(id)).Only(ctx)
}

// GetX is like Get, but panics if an error occurs.
func (c *RollClient) GetX(ctx context.Context, id string) *Roll {
	obj, err := c.Get(ctx, id)
	if err != nil {
		panic(err)
	}
	return obj
}

// QueryOwner queries the owner edge of a Roll.
func (c *RollClient) QueryOwner(r *Roll) *UserQuery {
	query := (&UserClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := r.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(roll.Table, roll.FieldID, id),
			sqlgraph.To(user.Table, user.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, roll.OwnerTable, roll.OwnerColumn),
		)
		fromV = sqlgraph.Neighbors(r.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// QueryRoom queries the room edge of a Roll.
func (c *RollClient) QueryRoom(r *Roll) *RoomQuery {
	query := (&RoomClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := r.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(roll.Table, roll.FieldID, id),
			sqlgraph.To(room.Table, room.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, roll.RoomTable, roll.RoomColumn),
		)
		fromV = sqlgraph.Neighbors(r.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// Hooks returns the client hooks.
func (c *RollClient) Hooks() []Hook {
	return c.hooks.Roll
}

// Interceptors returns the client interceptors.
func (c *RollClient) Interceptors() []Interceptor {
	return c.inters.Roll
}

func (c *RollClient) mutate(ctx context.Context, m *RollMutation) (Value, error) {
	switch m.Op() {
	case OpCreate:
		return (&RollCreate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdate:
		return (&RollUpdate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdateOne:
		return (&RollUpdateOne{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpDelete, OpDeleteOne:
		return (&RollDelete{config: c.config, hooks: c.Hooks(), mutation: m}).Exec(ctx)
	default:
		return nil, fmt.Errorf("ent: unknown Roll mutation op: %q", m.Op())
	}
}

// RollDefClient is a client for the RollDef schema.
type RollDefClient struct {
	config
}

// NewRollDefClient returns a client for the RollDef from the given config.
func NewRollDefClient(c config) *RollDefClient {
	return &RollDefClient{config: c}
}

// Use adds a list of mutation hooks to the hooks stack.
// A call to `Use(f, g, h)` equals to `rolldef.Hooks(f(g(h())))`.
func (c *RollDefClient) Use(hooks ...Hook) {
	c.hooks.RollDef = append(c.hooks.RollDef, hooks...)
}

// Intercept adds a list of query interceptors to the interceptors stack.
// A call to `Intercept(f, g, h)` equals to `rolldef.Intercept(f(g(h())))`.
func (c *RollDefClient) Intercept(interceptors ...Interceptor) {
	c.inters.RollDef = append(c.inters.RollDef, interceptors...)
}

// Create returns a builder for creating a RollDef entity.
func (c *RollDefClient) Create() *RollDefCreate {
	mutation := newRollDefMutation(c.config, OpCreate)
	return &RollDefCreate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// CreateBulk returns a builder for creating a bulk of RollDef entities.
func (c *RollDefClient) CreateBulk(builders ...*RollDefCreate) *RollDefCreateBulk {
	return &RollDefCreateBulk{config: c.config, builders: builders}
}

// Update returns an update builder for RollDef.
func (c *RollDefClient) Update() *RollDefUpdate {
	mutation := newRollDefMutation(c.config, OpUpdate)
	return &RollDefUpdate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOne returns an update builder for the given entity.
func (c *RollDefClient) UpdateOne(rd *RollDef) *RollDefUpdateOne {
	mutation := newRollDefMutation(c.config, OpUpdateOne, withRollDef(rd))
	return &RollDefUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOneID returns an update builder for the given id.
func (c *RollDefClient) UpdateOneID(id string) *RollDefUpdateOne {
	mutation := newRollDefMutation(c.config, OpUpdateOne, withRollDefID(id))
	return &RollDefUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// Delete returns a delete builder for RollDef.
func (c *RollDefClient) Delete() *RollDefDelete {
	mutation := newRollDefMutation(c.config, OpDelete)
	return &RollDefDelete{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// DeleteOne returns a builder for deleting the given entity.
func (c *RollDefClient) DeleteOne(rd *RollDef) *RollDefDeleteOne {
	return c.DeleteOneID(rd.ID)
}

// DeleteOneID returns a builder for deleting the given entity by its id.
func (c *RollDefClient) DeleteOneID(id string) *RollDefDeleteOne {
	builder := c.Delete().Where(rolldef.ID(id))
	builder.mutation.id = &id
	builder.mutation.op = OpDeleteOne
	return &RollDefDeleteOne{builder}
}

// Query returns a query builder for RollDef.
func (c *RollDefClient) Query() *RollDefQuery {
	return &RollDefQuery{
		config: c.config,
		ctx:    &QueryContext{Type: TypeRollDef},
		inters: c.Interceptors(),
	}
}

// Get returns a RollDef entity by its id.
func (c *RollDefClient) Get(ctx context.Context, id string) (*RollDef, error) {
	return c.Query().Where(rolldef.ID(id)).Only(ctx)
}

// GetX is like Get, but panics if an error occurs.
func (c *RollDefClient) GetX(ctx context.Context, id string) *RollDef {
	obj, err := c.Get(ctx, id)
	if err != nil {
		panic(err)
	}
	return obj
}

// QueryOwner queries the owner edge of a RollDef.
func (c *RollDefClient) QueryOwner(rd *RollDef) *UserQuery {
	query := (&UserClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := rd.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(rolldef.Table, rolldef.FieldID, id),
			sqlgraph.To(user.Table, user.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, rolldef.OwnerTable, rolldef.OwnerColumn),
		)
		fromV = sqlgraph.Neighbors(rd.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// Hooks returns the client hooks.
func (c *RollDefClient) Hooks() []Hook {
	return c.hooks.RollDef
}

// Interceptors returns the client interceptors.
func (c *RollDefClient) Interceptors() []Interceptor {
	return c.inters.RollDef
}

func (c *RollDefClient) mutate(ctx context.Context, m *RollDefMutation) (Value, error) {
	switch m.Op() {
	case OpCreate:
		return (&RollDefCreate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdate:
		return (&RollDefUpdate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdateOne:
		return (&RollDefUpdateOne{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpDelete, OpDeleteOne:
		return (&RollDefDelete{config: c.config, hooks: c.Hooks(), mutation: m}).Exec(ctx)
	default:
		return nil, fmt.Errorf("ent: unknown RollDef mutation op: %q", m.Op())
	}
}

// RoomClient is a client for the Room schema.
type RoomClient struct {
	config
}

// NewRoomClient returns a client for the Room from the given config.
func NewRoomClient(c config) *RoomClient {
	return &RoomClient{config: c}
}

// Use adds a list of mutation hooks to the hooks stack.
// A call to `Use(f, g, h)` equals to `room.Hooks(f(g(h())))`.
func (c *RoomClient) Use(hooks ...Hook) {
	c.hooks.Room = append(c.hooks.Room, hooks...)
}

// Intercept adds a list of query interceptors to the interceptors stack.
// A call to `Intercept(f, g, h)` equals to `room.Intercept(f(g(h())))`.
func (c *RoomClient) Intercept(interceptors ...Interceptor) {
	c.inters.Room = append(c.inters.Room, interceptors...)
}

// Create returns a builder for creating a Room entity.
func (c *RoomClient) Create() *RoomCreate {
	mutation := newRoomMutation(c.config, OpCreate)
	return &RoomCreate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// CreateBulk returns a builder for creating a bulk of Room entities.
func (c *RoomClient) CreateBulk(builders ...*RoomCreate) *RoomCreateBulk {
	return &RoomCreateBulk{config: c.config, builders: builders}
}

// Update returns an update builder for Room.
func (c *RoomClient) Update() *RoomUpdate {
	mutation := newRoomMutation(c.config, OpUpdate)
	return &RoomUpdate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOne returns an update builder for the given entity.
func (c *RoomClient) UpdateOne(r *Room) *RoomUpdateOne {
	mutation := newRoomMutation(c.config, OpUpdateOne, withRoom(r))
	return &RoomUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOneID returns an update builder for the given id.
func (c *RoomClient) UpdateOneID(id string) *RoomUpdateOne {
	mutation := newRoomMutation(c.config, OpUpdateOne, withRoomID(id))
	return &RoomUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// Delete returns a delete builder for Room.
func (c *RoomClient) Delete() *RoomDelete {
	mutation := newRoomMutation(c.config, OpDelete)
	return &RoomDelete{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// DeleteOne returns a builder for deleting the given entity.
func (c *RoomClient) DeleteOne(r *Room) *RoomDeleteOne {
	return c.DeleteOneID(r.ID)
}

// DeleteOneID returns a builder for deleting the given entity by its id.
func (c *RoomClient) DeleteOneID(id string) *RoomDeleteOne {
	builder := c.Delete().Where(room.ID(id))
	builder.mutation.id = &id
	builder.mutation.op = OpDeleteOne
	return &RoomDeleteOne{builder}
}

// Query returns a query builder for Room.
func (c *RoomClient) Query() *RoomQuery {
	return &RoomQuery{
		config: c.config,
		ctx:    &QueryContext{Type: TypeRoom},
		inters: c.Interceptors(),
	}
}

// Get returns a Room entity by its id.
func (c *RoomClient) Get(ctx context.Context, id string) (*Room, error) {
	return c.Query().Where(room.ID(id)).Only(ctx)
}

// GetX is like Get, but panics if an error occurs.
func (c *RoomClient) GetX(ctx context.Context, id string) *Room {
	obj, err := c.Get(ctx, id)
	if err != nil {
		panic(err)
	}
	return obj
}

// QueryRolls queries the rolls edge of a Room.
func (c *RoomClient) QueryRolls(r *Room) *RollQuery {
	query := (&RollClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := r.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(room.Table, room.FieldID, id),
			sqlgraph.To(roll.Table, roll.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, room.RollsTable, room.RollsColumn),
		)
		fromV = sqlgraph.Neighbors(r.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// QueryOwner queries the owner edge of a Room.
func (c *RoomClient) QueryOwner(r *Room) *UserQuery {
	query := (&UserClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := r.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(room.Table, room.FieldID, id),
			sqlgraph.To(user.Table, user.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, room.OwnerTable, room.OwnerColumn),
		)
		fromV = sqlgraph.Neighbors(r.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// Hooks returns the client hooks.
func (c *RoomClient) Hooks() []Hook {
	return c.hooks.Room
}

// Interceptors returns the client interceptors.
func (c *RoomClient) Interceptors() []Interceptor {
	return c.inters.Room
}

func (c *RoomClient) mutate(ctx context.Context, m *RoomMutation) (Value, error) {
	switch m.Op() {
	case OpCreate:
		return (&RoomCreate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdate:
		return (&RoomUpdate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdateOne:
		return (&RoomUpdateOne{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpDelete, OpDeleteOne:
		return (&RoomDelete{config: c.config, hooks: c.Hooks(), mutation: m}).Exec(ctx)
	default:
		return nil, fmt.Errorf("ent: unknown Room mutation op: %q", m.Op())
	}
}

// UserClient is a client for the User schema.
type UserClient struct {
	config
}

// NewUserClient returns a client for the User from the given config.
func NewUserClient(c config) *UserClient {
	return &UserClient{config: c}
}

// Use adds a list of mutation hooks to the hooks stack.
// A call to `Use(f, g, h)` equals to `user.Hooks(f(g(h())))`.
func (c *UserClient) Use(hooks ...Hook) {
	c.hooks.User = append(c.hooks.User, hooks...)
}

// Intercept adds a list of query interceptors to the interceptors stack.
// A call to `Intercept(f, g, h)` equals to `user.Intercept(f(g(h())))`.
func (c *UserClient) Intercept(interceptors ...Interceptor) {
	c.inters.User = append(c.inters.User, interceptors...)
}

// Create returns a builder for creating a User entity.
func (c *UserClient) Create() *UserCreate {
	mutation := newUserMutation(c.config, OpCreate)
	return &UserCreate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// CreateBulk returns a builder for creating a bulk of User entities.
func (c *UserClient) CreateBulk(builders ...*UserCreate) *UserCreateBulk {
	return &UserCreateBulk{config: c.config, builders: builders}
}

// Update returns an update builder for User.
func (c *UserClient) Update() *UserUpdate {
	mutation := newUserMutation(c.config, OpUpdate)
	return &UserUpdate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOne returns an update builder for the given entity.
func (c *UserClient) UpdateOne(u *User) *UserUpdateOne {
	mutation := newUserMutation(c.config, OpUpdateOne, withUser(u))
	return &UserUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOneID returns an update builder for the given id.
func (c *UserClient) UpdateOneID(id string) *UserUpdateOne {
	mutation := newUserMutation(c.config, OpUpdateOne, withUserID(id))
	return &UserUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// Delete returns a delete builder for User.
func (c *UserClient) Delete() *UserDelete {
	mutation := newUserMutation(c.config, OpDelete)
	return &UserDelete{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// DeleteOne returns a builder for deleting the given entity.
func (c *UserClient) DeleteOne(u *User) *UserDeleteOne {
	return c.DeleteOneID(u.ID)
}

// DeleteOneID returns a builder for deleting the given entity by its id.
func (c *UserClient) DeleteOneID(id string) *UserDeleteOne {
	builder := c.Delete().Where(user.ID(id))
	builder.mutation.id = &id
	builder.mutation.op = OpDeleteOne
	return &UserDeleteOne{builder}
}

// Query returns a query builder for User.
func (c *UserClient) Query() *UserQuery {
	return &UserQuery{
		config: c.config,
		ctx:    &QueryContext{Type: TypeUser},
		inters: c.Interceptors(),
	}
}

// Get returns a User entity by its id.
func (c *UserClient) Get(ctx context.Context, id string) (*User, error) {
	return c.Query().Where(user.ID(id)).Only(ctx)
}

// GetX is like Get, but panics if an error occurs.
func (c *UserClient) GetX(ctx context.Context, id string) *User {
	obj, err := c.Get(ctx, id)
	if err != nil {
		panic(err)
	}
	return obj
}

// QueryRooms queries the rooms edge of a User.
func (c *UserClient) QueryRooms(u *User) *RoomQuery {
	query := (&RoomClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := u.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(user.Table, user.FieldID, id),
			sqlgraph.To(room.Table, room.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, user.RoomsTable, user.RoomsColumn),
		)
		fromV = sqlgraph.Neighbors(u.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// QueryRolls queries the rolls edge of a User.
func (c *UserClient) QueryRolls(u *User) *RollQuery {
	query := (&RollClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := u.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(user.Table, user.FieldID, id),
			sqlgraph.To(roll.Table, roll.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, user.RollsTable, user.RollsColumn),
		)
		fromV = sqlgraph.Neighbors(u.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// QueryCharsheets queries the charsheets edge of a User.
func (c *UserClient) QueryCharsheets(u *User) *CharsheetQuery {
	query := (&CharsheetClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := u.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(user.Table, user.FieldID, id),
			sqlgraph.To(charsheet.Table, charsheet.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, user.CharsheetsTable, user.CharsheetsColumn),
		)
		fromV = sqlgraph.Neighbors(u.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// QueryRolldefs queries the rolldefs edge of a User.
func (c *UserClient) QueryRolldefs(u *User) *RollDefQuery {
	query := (&RollDefClient{config: c.config}).Query()
	query.path = func(context.Context) (fromV *sql.Selector, _ error) {
		id := u.ID
		step := sqlgraph.NewStep(
			sqlgraph.From(user.Table, user.FieldID, id),
			sqlgraph.To(rolldef.Table, rolldef.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, user.RolldefsTable, user.RolldefsColumn),
		)
		fromV = sqlgraph.Neighbors(u.driver.Dialect(), step)
		return fromV, nil
	}
	return query
}

// Hooks returns the client hooks.
func (c *UserClient) Hooks() []Hook {
	return c.hooks.User
}

// Interceptors returns the client interceptors.
func (c *UserClient) Interceptors() []Interceptor {
	return c.inters.User
}

func (c *UserClient) mutate(ctx context.Context, m *UserMutation) (Value, error) {
	switch m.Op() {
	case OpCreate:
		return (&UserCreate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdate:
		return (&UserUpdate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdateOne:
		return (&UserUpdateOne{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpDelete, OpDeleteOne:
		return (&UserDelete{config: c.config, hooks: c.Hooks(), mutation: m}).Exec(ctx)
	default:
		return nil, fmt.Errorf("ent: unknown User mutation op: %q", m.Op())
	}
}

// hooks and interceptors per client, for fast access.
type (
	hooks struct {
		Charsheet, Roll, RollDef, Room, User []ent.Hook
	}
	inters struct {
		Charsheet, Roll, RollDef, Room, User []ent.Interceptor
	}
)
