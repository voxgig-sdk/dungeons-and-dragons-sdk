# frozen_string_literal: true

# Typed models for the DungeonsAndDragons SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetApiRoot entity data model.
#
# @!attribute [rw] abilityscores
#   @return [String, nil]
#
# @!attribute [rw] alignments
#   @return [String, nil]
#
# @!attribute [rw] backgrounds
#   @return [String, nil]
#
# @!attribute [rw] classes
#   @return [String, nil]
#
# @!attribute [rw] conditions
#   @return [String, nil]
#
# @!attribute [rw] damagetypes
#   @return [String, nil]
#
# @!attribute [rw] equipment
#   @return [String, nil]
#
# @!attribute [rw] equipmentcategories
#   @return [String, nil]
#
# @!attribute [rw] feats
#   @return [String, nil]
#
# @!attribute [rw] features
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] languages
#   @return [String, nil]
#
# @!attribute [rw] magicitems
#   @return [String, nil]
#
# @!attribute [rw] magicschools
#   @return [String, nil]
#
# @!attribute [rw] monsters
#   @return [String, nil]
#
# @!attribute [rw] proficiencies
#   @return [String, nil]
#
# @!attribute [rw] races
#   @return [String, nil]
#
# @!attribute [rw] rules
#   @return [String, nil]
#
# @!attribute [rw] rulesections
#   @return [String, nil]
#
# @!attribute [rw] skills
#   @return [String, nil]
#
# @!attribute [rw] spells
#   @return [String, nil]
#
# @!attribute [rw] subclasses
#   @return [String, nil]
#
# @!attribute [rw] subraces
#   @return [String, nil]
#
# @!attribute [rw] traits
#   @return [String, nil]
#
# @!attribute [rw] weaponproperties
#   @return [String, nil]
GetApiRoot = Struct.new(
  :abilityscores,
  :alignments,
  :backgrounds,
  :classes,
  :conditions,
  :damagetypes,
  :equipment,
  :equipmentcategories,
  :feats,
  :features,
  :key,
  :languages,
  :magicitems,
  :magicschools,
  :monsters,
  :proficiencies,
  :races,
  :rules,
  :rulesections,
  :skills,
  :spells,
  :subclasses,
  :subraces,
  :traits,
  :weaponproperties,
  keyword_init: true
)

# Request payload for GetApiRoot#load.
#
# @!attribute [rw] abilityscores
#   @return [String, nil]
#
# @!attribute [rw] alignments
#   @return [String, nil]
#
# @!attribute [rw] backgrounds
#   @return [String, nil]
#
# @!attribute [rw] classes
#   @return [String, nil]
#
# @!attribute [rw] conditions
#   @return [String, nil]
#
# @!attribute [rw] damagetypes
#   @return [String, nil]
#
# @!attribute [rw] equipment
#   @return [String, nil]
#
# @!attribute [rw] equipmentcategories
#   @return [String, nil]
#
# @!attribute [rw] feats
#   @return [String, nil]
#
# @!attribute [rw] features
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] languages
#   @return [String, nil]
#
# @!attribute [rw] magicitems
#   @return [String, nil]
#
# @!attribute [rw] magicschools
#   @return [String, nil]
#
# @!attribute [rw] monsters
#   @return [String, nil]
#
# @!attribute [rw] proficiencies
#   @return [String, nil]
#
# @!attribute [rw] races
#   @return [String, nil]
#
# @!attribute [rw] rules
#   @return [String, nil]
#
# @!attribute [rw] rulesections
#   @return [String, nil]
#
# @!attribute [rw] skills
#   @return [String, nil]
#
# @!attribute [rw] spells
#   @return [String, nil]
#
# @!attribute [rw] subclasses
#   @return [String, nil]
#
# @!attribute [rw] subraces
#   @return [String, nil]
#
# @!attribute [rw] traits
#   @return [String, nil]
#
# @!attribute [rw] weaponproperties
#   @return [String, nil]
GetApiRootLoadMatch = Struct.new(
  :abilityscores,
  :alignments,
  :backgrounds,
  :classes,
  :conditions,
  :damagetypes,
  :equipment,
  :equipmentcategories,
  :feats,
  :features,
  :key,
  :languages,
  :magicitems,
  :magicschools,
  :monsters,
  :proficiencies,
  :races,
  :rules,
  :rulesections,
  :skills,
  :spells,
  :subclasses,
  :subraces,
  :traits,
  :weaponproperties,
  keyword_init: true
)

# GetResourceByIndex entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
GetResourceByIndex = Struct.new(
  :id,
  :index,
  :name,
  :url,
  keyword_init: true
)

# Request payload for GetResourceByIndex#load.
#
# @!attribute [rw] index
#   @return [String]
#
# @!attribute [rw] resource
#   @return [String]
GetResourceByIndexLoadMatch = Struct.new(
  :index,
  :resource,
  keyword_init: true
)

# GetResourceList entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
GetResourceList = Struct.new(
  :id,
  :index,
  :name,
  :url,
  keyword_init: true
)

# Request payload for GetResourceList#list.
#
# @!attribute [rw] id
#   @return [String]
GetResourceListListMatch = Struct.new(
  :id,
  keyword_init: true
)

# GraphQl entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] operationName
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] variables
#   @return [Hash, nil]
GraphQl = Struct.new(
  :data,
  :errors,
  :operationName,
  :query,
  :variables,
  keyword_init: true
)

# Request payload for GraphQl#create.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] operationName
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] variables
#   @return [Hash, nil]
GraphQlCreateData = Struct.new(
  :data,
  :errors,
  :operationName,
  :query,
  :variables,
  keyword_init: true
)

