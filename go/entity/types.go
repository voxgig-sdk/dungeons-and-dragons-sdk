// Typed models for the DungeonsAndDragons SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GetApiRoot is the typed data model for the get_api_root entity.
type GetApiRoot struct {
	AbilityScore *string `json:"ability_score,omitempty"`
	Alignment *string `json:"alignment,omitempty"`
	Background *string `json:"background,omitempty"`
	Class *string `json:"class,omitempty"`
	Condition *string `json:"condition,omitempty"`
	DamageType *string `json:"damage_type,omitempty"`
	Equipment *string `json:"equipment,omitempty"`
	EquipmentCategory *string `json:"equipment_category,omitempty"`
	Feat *string `json:"feat,omitempty"`
	Feature *string `json:"feature,omitempty"`
	Key *string `json:"key,omitempty"`
	Language *string `json:"language,omitempty"`
	MagicItem *string `json:"magic_item,omitempty"`
	MagicSchool *string `json:"magic_school,omitempty"`
	Monster *string `json:"monster,omitempty"`
	Proficiency *string `json:"proficiency,omitempty"`
	Race *string `json:"race,omitempty"`
	Rule *string `json:"rule,omitempty"`
	RuleSection *string `json:"rule_section,omitempty"`
	Skill *string `json:"skill,omitempty"`
	Spell *string `json:"spell,omitempty"`
	Subclass *string `json:"subclass,omitempty"`
	Subrace *string `json:"subrace,omitempty"`
	Trait *string `json:"trait,omitempty"`
	WeaponProperty *string `json:"weapon_property,omitempty"`
}

// GetApiRootLoadMatch mirrors the get_api_root fields as an all-optional match
// filter (Go analog of Partial<GetApiRoot>).
type GetApiRootLoadMatch struct {
	AbilityScore *string `json:"ability_score,omitempty"`
	Alignment *string `json:"alignment,omitempty"`
	Background *string `json:"background,omitempty"`
	Class *string `json:"class,omitempty"`
	Condition *string `json:"condition,omitempty"`
	DamageType *string `json:"damage_type,omitempty"`
	Equipment *string `json:"equipment,omitempty"`
	EquipmentCategory *string `json:"equipment_category,omitempty"`
	Feat *string `json:"feat,omitempty"`
	Feature *string `json:"feature,omitempty"`
	Key *string `json:"key,omitempty"`
	Language *string `json:"language,omitempty"`
	MagicItem *string `json:"magic_item,omitempty"`
	MagicSchool *string `json:"magic_school,omitempty"`
	Monster *string `json:"monster,omitempty"`
	Proficiency *string `json:"proficiency,omitempty"`
	Race *string `json:"race,omitempty"`
	Rule *string `json:"rule,omitempty"`
	RuleSection *string `json:"rule_section,omitempty"`
	Skill *string `json:"skill,omitempty"`
	Spell *string `json:"spell,omitempty"`
	Subclass *string `json:"subclass,omitempty"`
	Subrace *string `json:"subrace,omitempty"`
	Trait *string `json:"trait,omitempty"`
	WeaponProperty *string `json:"weapon_property,omitempty"`
}

// GetResourceByIndex is the typed data model for the get_resource_by_index entity.
type GetResourceByIndex struct {
	Index *string `json:"index,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// GetResourceByIndexLoadMatch is the typed request payload for GetResourceByIndex.LoadTyped.
type GetResourceByIndexLoadMatch struct {
	Index string `json:"index"`
	Resource string `json:"resource"`
}

// GetResourceList is the typed data model for the get_resource_list entity.
type GetResourceList struct {
	Index *string `json:"index,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// GetResourceListListMatch is the typed request payload for GetResourceList.ListTyped.
type GetResourceListListMatch struct {
	Id string `json:"id"`
}

// GraphQl is the typed data model for the graph_ql entity.
type GraphQl struct {
	Data *map[string]any `json:"data,omitempty"`
	Error *[]any `json:"error,omitempty"`
	OperationName *string `json:"operation_name,omitempty"`
	Query string `json:"query"`
	Variable *map[string]any `json:"variable,omitempty"`
}

// GraphQlCreateData mirrors the graph_ql fields as an all-optional match
// filter (Go analog of Partial<GraphQl>).
type GraphQlCreateData struct {
	Data *map[string]any `json:"data,omitempty"`
	Error *[]any `json:"error,omitempty"`
	OperationName *string `json:"operation_name,omitempty"`
	Query *string `json:"query,omitempty"`
	Variable *map[string]any `json:"variable,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
