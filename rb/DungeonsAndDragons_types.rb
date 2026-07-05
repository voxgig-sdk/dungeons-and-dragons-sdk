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
# @!attribute [rw] ability_score
#   @return [String, nil]
#
# @!attribute [rw] alignment
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [String, nil]
#
# @!attribute [rw] damage_type
#   @return [String, nil]
#
# @!attribute [rw] equipment
#   @return [String, nil]
#
# @!attribute [rw] equipment_category
#   @return [String, nil]
#
# @!attribute [rw] feat
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] magic_item
#   @return [String, nil]
#
# @!attribute [rw] magic_school
#   @return [String, nil]
#
# @!attribute [rw] monster
#   @return [String, nil]
#
# @!attribute [rw] proficiency
#   @return [String, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] rule
#   @return [String, nil]
#
# @!attribute [rw] rule_section
#   @return [String, nil]
#
# @!attribute [rw] skill
#   @return [String, nil]
#
# @!attribute [rw] spell
#   @return [String, nil]
#
# @!attribute [rw] subclass
#   @return [String, nil]
#
# @!attribute [rw] subrace
#   @return [String, nil]
#
# @!attribute [rw] trait
#   @return [String, nil]
#
# @!attribute [rw] weapon_property
#   @return [String, nil]
GetApiRoot = Struct.new(
  :ability_score,
  :alignment,
  :background,
  :class,
  :condition,
  :damage_type,
  :equipment,
  :equipment_category,
  :feat,
  :feature,
  :key,
  :language,
  :magic_item,
  :magic_school,
  :monster,
  :proficiency,
  :race,
  :rule,
  :rule_section,
  :skill,
  :spell,
  :subclass,
  :subrace,
  :trait,
  :weapon_property,
  keyword_init: true
)

# Request payload for GetApiRoot#load.
#
# @!attribute [rw] ability_score
#   @return [String, nil]
#
# @!attribute [rw] alignment
#   @return [String, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] class
#   @return [String, nil]
#
# @!attribute [rw] condition
#   @return [String, nil]
#
# @!attribute [rw] damage_type
#   @return [String, nil]
#
# @!attribute [rw] equipment
#   @return [String, nil]
#
# @!attribute [rw] equipment_category
#   @return [String, nil]
#
# @!attribute [rw] feat
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] magic_item
#   @return [String, nil]
#
# @!attribute [rw] magic_school
#   @return [String, nil]
#
# @!attribute [rw] monster
#   @return [String, nil]
#
# @!attribute [rw] proficiency
#   @return [String, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] rule
#   @return [String, nil]
#
# @!attribute [rw] rule_section
#   @return [String, nil]
#
# @!attribute [rw] skill
#   @return [String, nil]
#
# @!attribute [rw] spell
#   @return [String, nil]
#
# @!attribute [rw] subclass
#   @return [String, nil]
#
# @!attribute [rw] subrace
#   @return [String, nil]
#
# @!attribute [rw] trait
#   @return [String, nil]
#
# @!attribute [rw] weapon_property
#   @return [String, nil]
GetApiRootLoadMatch = Struct.new(
  :ability_score,
  :alignment,
  :background,
  :class,
  :condition,
  :damage_type,
  :equipment,
  :equipment_category,
  :feat,
  :feature,
  :key,
  :language,
  :magic_item,
  :magic_school,
  :monster,
  :proficiency,
  :race,
  :rule,
  :rule_section,
  :skill,
  :spell,
  :subclass,
  :subrace,
  :trait,
  :weapon_property,
  keyword_init: true
)

# GetResourceByIndex entity data model.
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
# @!attribute [rw] index
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
GetResourceList = Struct.new(
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
# @!attribute [rw] error
#   @return [Array, nil]
#
# @!attribute [rw] operation_name
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] variable
#   @return [Hash, nil]
GraphQl = Struct.new(
  :data,
  :error,
  :operation_name,
  :query,
  :variable,
  keyword_init: true
)

# Request payload for GraphQl#create.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Array, nil]
#
# @!attribute [rw] operation_name
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] variable
#   @return [Hash, nil]
GraphQlCreateData = Struct.new(
  :data,
  :error,
  :operation_name,
  :query,
  :variable,
  keyword_init: true
)

