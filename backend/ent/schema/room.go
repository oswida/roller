package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Room struct {
	ent.Schema
}

func (Room) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique(),
		field.String("name"),
		field.String("bkg"),
	}
}

func (Room) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("rolls", Roll.Type),
		edge.From("owner", User.Type).
			Ref("rooms").
			Unique(),
	}
}
