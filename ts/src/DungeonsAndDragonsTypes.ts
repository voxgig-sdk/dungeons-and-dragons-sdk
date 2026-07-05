// Typed models for the DungeonsAndDragons SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetApiRoot {
  ability_score?: string
  alignment?: string
  background?: string
  class?: string
  condition?: string
  damage_type?: string
  equipment?: string
  equipment_category?: string
  feat?: string
  feature?: string
  key?: string
  language?: string
  magic_item?: string
  magic_school?: string
  monster?: string
  proficiency?: string
  race?: string
  rule?: string
  rule_section?: string
  skill?: string
  spell?: string
  subclass?: string
  subrace?: string
  trait?: string
  weapon_property?: string
}

export interface GetApiRootLoadMatch {
  ability_score?: string
  alignment?: string
  background?: string
  class?: string
  condition?: string
  damage_type?: string
  equipment?: string
  equipment_category?: string
  feat?: string
  feature?: string
  key?: string
  language?: string
  magic_item?: string
  magic_school?: string
  monster?: string
  proficiency?: string
  race?: string
  rule?: string
  rule_section?: string
  skill?: string
  spell?: string
  subclass?: string
  subrace?: string
  trait?: string
  weapon_property?: string
}

export interface GetResourceByIndex {
  index?: string
  name?: string
  url?: string
}

export interface GetResourceByIndexLoadMatch {
  index: string
  resource: string
}

export interface GetResourceList {
  index?: string
  name?: string
  url?: string
}

export interface GetResourceListListMatch {
  id: string
}

export interface GraphQl {
  data?: Record<string, any>
  error?: any[]
  operation_name?: string
  query: string
  variable?: Record<string, any>
}

export interface GraphQlCreateData {
  data?: Record<string, any>
  error?: any[]
  operation_name?: string
  query: string
  variable?: Record<string, any>
}

