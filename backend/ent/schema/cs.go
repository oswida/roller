package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Charsheet struct {
	ent.Schema
}

func (Charsheet) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique(),
		field.String("name"),
		field.String("template"),
		field.JSON("values", map[string]any{}),
		field.Bool("shared"),
		field.String("portrait"),
	}
}

func (Charsheet) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("owner", User.Type).
			Ref("charsheets").
			Unique(),
	}
}
