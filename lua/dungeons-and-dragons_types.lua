-- Typed models for the DungeonsAndDragons SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetApiRoot
---@field abilityscores? string
---@field alignments? string
---@field backgrounds? string
---@field classes? string
---@field conditions? string
---@field damagetypes? string
---@field equipment? string
---@field equipmentcategories? string
---@field feats? string
---@field features? string
---@field key? string
---@field languages? string
---@field magicitems? string
---@field magicschools? string
---@field monsters? string
---@field proficiencies? string
---@field races? string
---@field rules? string
---@field rulesections? string
---@field skills? string
---@field spells? string
---@field subclasses? string
---@field subraces? string
---@field traits? string
---@field weaponproperties? string

---@class GetApiRootLoadMatch
---@field abilityscores? string
---@field alignments? string
---@field backgrounds? string
---@field classes? string
---@field conditions? string
---@field damagetypes? string
---@field equipment? string
---@field equipmentcategories? string
---@field feats? string
---@field features? string
---@field key? string
---@field languages? string
---@field magicitems? string
---@field magicschools? string
---@field monsters? string
---@field proficiencies? string
---@field races? string
---@field rules? string
---@field rulesections? string
---@field skills? string
---@field spells? string
---@field subclasses? string
---@field subraces? string
---@field traits? string
---@field weaponproperties? string

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
---@field errors? table
---@field operationName? string
---@field query string
---@field variables? table

---@class GraphQlCreateData
---@field data? table
---@field errors? table
---@field operationName? string
---@field query string
---@field variables? table

local M = {}

return M
