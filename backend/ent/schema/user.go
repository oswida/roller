package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type User struct {
	ent.Schema
}

func (User) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").Unique(),
		field.String("login"),
		field.String("passwd"),
		field.Bool("is_admin").Default(false),
		field.String("name"),
		field.String("color"),
		field.JSON("settings", map[string]any{}),
	}
}

func (User) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("rooms", Room.Type),
		edge.To("rolls", Roll.Type),
		edge.To("charsheets", Charsheet.Type),
		edge.To("rolldefs", RollDef.Type),
	}
}
