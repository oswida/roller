package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type RollDef struct {
	ent.Schema
}

func (RollDef) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique(),
		field.String("name"),
		field.String("dice"),
		field.Int("modifier"),
		field.String("successRule"),
		field.String("successTarget"),
		field.String("comment"),
		field.Bool("shared").Default(false),
	}
}

func (RollDef) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("owner", User.Type).
			Ref("rolldefs").
			Unique(),
	}
}
