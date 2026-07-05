-- Typed models for the DungeonsAndDragons SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetApiRoot
---@field ability_score? string
---@field alignment? string
---@field background? string
---@field class? string
---@field condition? string
---@field damage_type? string
---@field equipment? string
---@field equipment_category? string
---@field feat? string
---@field feature? string
---@field key? string
---@field language? string
---@field magic_item? string
---@field magic_school? string
---@field monster? string
---@field proficiency? string
---@field race? string
---@field rule? string
---@field rule_section? string
---@field skill? string
---@field spell? string
---@field subclass? string
---@field subrace? string
---@field trait? string
---@field weapon_property? string

---@class GetApiRootLoadMatch
---@field ability_score? string
---@field alignment? string
---@field background? string
---@field class? string
---@field condition? string
---@field damage_type? string
---@field equipment? string
---@field equipment_category? string
---@field feat? string
---@field feature? string
---@field key? string
---@field language? string
---@field magic_item? string
---@field magic_school? string
---@field monster? string
---@field proficiency? string
---@field race? string
---@field rule? string
---@field rule_section? string
---@field skill? string
---@field spell? string
---@field subclass? string
---@field subrace? string
---@field trait? string
---@field weapon_property? string

---@class GetResourceByIndex
---@field index? string
---@field name? string
---@field url? string

---@class GetResourceByIndexLoadMatch
---@field index string
---@field resource string

---@class GetResourceList
---@field index? string
---@field name? string
---@field url? string

---@class GetResourceListListMatch
---@field id string

---@class GraphQl
---@field data? table
---@field error? table
---@field operation_name? string
---@field query string
---@field variable? table

---@class GraphQlCreateData
---@field data? table
---@field error? table
---@field operation_name? string
---@field query string
---@field variable? table

local M = {}

return M
