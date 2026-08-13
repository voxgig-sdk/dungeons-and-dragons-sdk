// Typed models for the DungeonsAndDragons SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/core"
)

// GetApiRoot is the typed data model for the get_api_root entity.
type GetApiRoot struct {
	Abilityscores *string `json:"abilityscores,omitempty"`
	Alignments *string `json:"alignments,omitempty"`
	Backgrounds *string `json:"backgrounds,omitempty"`
	Classes *string `json:"classes,omitempty"`
	Conditions *string `json:"conditions,omitempty"`
	Damagetypes *string `json:"damagetypes,omitempty"`
	Equipment *string `json:"equipment,omitempty"`
	Equipmentcategories *string `json:"equipmentcategories,omitempty"`
	Feats *string `json:"feats,omitempty"`
	Features *string `json:"features,omitempty"`
	Key *string `json:"key,omitempty"`
	Languages *string `json:"languages,omitempty"`
	Magicitems *string `json:"magicitems,omitempty"`
	Magicschools *string `json:"magicschools,omitempty"`
	Monsters *string `json:"monsters,omitempty"`
	Proficiencies *string `json:"proficiencies,omitempty"`
	Races *string `json:"races,omitempty"`
	Rules *string `json:"rules,omitempty"`
	Rulesections *string `json:"rulesections,omitempty"`
	Skills *string `json:"skills,omitempty"`
	Spells *string `json:"spells,omitempty"`
	Subclasses *string `json:"subclasses,omitempty"`
	Subraces *string `json:"subraces,omitempty"`
	Traits *string `json:"traits,omitempty"`
	Weaponproperties *string `json:"weaponproperties,omitempty"`
}

// GetApiRootLoadMatch is the typed request payload for GetApiRoot.LoadTyped.
type GetApiRootLoadMatch struct {
	Abilityscores *string `json:"abilityscores,omitempty"`
	Alignments *string `json:"alignments,omitempty"`
	Backgrounds *string `json:"backgrounds,omitempty"`
	Classes *string `json:"classes,omitempty"`
	Conditions *string `json:"conditions,omitempty"`
	Damagetypes *string `json:"damagetypes,omitempty"`
	Equipment *string `json:"equipment,omitempty"`
	Equipmentcategories *string `json:"equipmentcategories,omitempty"`
	Feats *string `json:"feats,omitempty"`
	Features *string `json:"features,omitempty"`
	Key *string `json:"key,omitempty"`
	Languages *string `json:"languages,omitempty"`
	Magicitems *string `json:"magicitems,omitempty"`
	Magicschools *string `json:"magicschools,omitempty"`
	Monsters *string `json:"monsters,omitempty"`
	Proficiencies *string `json:"proficiencies,omitempty"`
	Races *string `json:"races,omitempty"`
	Rules *string `json:"rules,omitempty"`
	Rulesections *string `json:"rulesections,omitempty"`
	Skills *string `json:"skills,omitempty"`
	Spells *string `json:"spells,omitempty"`
	Subclasses *string `json:"subclasses,omitempty"`
	Subraces *string `json:"subraces,omitempty"`
	Traits *string `json:"traits,omitempty"`
	Weaponproperties *string `json:"weaponproperties,omitempty"`
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
	Errors *[]any `json:"errors,omitempty"`
	OperationName *string `json:"operationName,omitempty"`
	Query string `json:"query"`
	Variables *map[string]any `json:"variables,omitempty"`
}

// GraphQlCreateData is the typed request payload for GraphQl.CreateTyped.
type GraphQlCreateData struct {
	Data *map[string]any `json:"data,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	OperationName *string `json:"operationName,omitempty"`
	Query string `json:"query"`
	Variables *map[string]any `json:"variables,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
