package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Roll struct {
	ent.Schema
}

func (Roll) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique(),
		field.String("tstamp"),
		field.Time("time"),
		field.String("result"),
		field.String("diceColor"),
		field.String("diceMaterial"),
		field.String("comment"),
		field.String("successRule"),
		field.Int("successTarget"),
		field.Bool("private"),
		field.Bool("revealed"),
	}
}

func (Roll) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("owner", User.Type).
			Ref("rolls").
			Unique(),
		edge.From("room", Room.Type).
			Ref("rolls").
			Unique(),
	}
}
