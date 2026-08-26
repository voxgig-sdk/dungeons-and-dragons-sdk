// Typed models for the DungeonsAndDragons SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetApiRoot {
  abilityscores?: string
  alignments?: string
  backgrounds?: string
  classes?: string
  conditions?: string
  damagetypes?: string
  equipment?: string
  equipmentcategories?: string
  feats?: string
  features?: string
  key?: string
  languages?: string
  magicitems?: string
  magicschools?: string
  monsters?: string
  proficiencies?: string
  races?: string
  rules?: string
  rulesections?: string
  skills?: string
  spells?: string
  subclasses?: string
  subraces?: string
  traits?: string
  weaponproperties?: string
}

export interface GetApiRootLoadMatch {
  abilityscores?: string
  alignments?: string
  backgrounds?: string
  classes?: string
  conditions?: string
  damagetypes?: string
  equipment?: string
  equipmentcategories?: string
  feats?: string
  features?: string
  key?: string
  languages?: string
  magicitems?: string
  magicschools?: string
  monsters?: string
  proficiencies?: string
  races?: string
  rules?: string
  rulesections?: string
  skills?: string
  spells?: string
  subclasses?: string
  subraces?: string
  traits?: string
  weaponproperties?: string
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
  id?: string
  index?: string
  name?: string
  url?: string
}

export interface GetResourceListListMatch {
  id: string
}

export interface GraphQl {
  data?: Record<string, any>
  errors?: any[]
  operationName?: string
  query: string
  variables?: Record<string, any>
}

export interface GraphQlCreateData {
  data?: Record<string, any>
  errors?: any[]
  operationName?: string
  query: string
  variables?: Record<string, any>
}

