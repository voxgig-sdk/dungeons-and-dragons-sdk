<?php
declare(strict_types=1);

// Typed models for the DungeonsAndDragons SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetApiRoot entity data model. */
class GetApiRoot
{
    public ?string $ability_score = null;
    public ?string $alignment = null;
    public ?string $background = null;
    public ?string $class = null;
    public ?string $condition = null;
    public ?string $damage_type = null;
    public ?string $equipment = null;
    public ?string $equipment_category = null;
    public ?string $feat = null;
    public ?string $feature = null;
    public ?string $key = null;
    public ?string $language = null;
    public ?string $magic_item = null;
    public ?string $magic_school = null;
    public ?string $monster = null;
    public ?string $proficiency = null;
    public ?string $race = null;
    public ?string $rule = null;
    public ?string $rule_section = null;
    public ?string $skill = null;
    public ?string $spell = null;
    public ?string $subclass = null;
    public ?string $subrace = null;
    public ?string $trait = null;
    public ?string $weapon_property = null;
}

/** Request payload for GetApiRoot#load. */
class GetApiRootLoadMatch
{
    public ?string $ability_score = null;
    public ?string $alignment = null;
    public ?string $background = null;
    public ?string $class = null;
    public ?string $condition = null;
    public ?string $damage_type = null;
    public ?string $equipment = null;
    public ?string $equipment_category = null;
    public ?string $feat = null;
    public ?string $feature = null;
    public ?string $key = null;
    public ?string $language = null;
    public ?string $magic_item = null;
    public ?string $magic_school = null;
    public ?string $monster = null;
    public ?string $proficiency = null;
    public ?string $race = null;
    public ?string $rule = null;
    public ?string $rule_section = null;
    public ?string $skill = null;
    public ?string $spell = null;
    public ?string $subclass = null;
    public ?string $subrace = null;
    public ?string $trait = null;
    public ?string $weapon_property = null;
}

/** GetResourceByIndex entity data model. */
class GetResourceByIndex
{
    public ?string $index = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Request payload for GetResourceByIndex#load. */
class GetResourceByIndexLoadMatch
{
    public string $index;
    public string $resource;
}

/** GetResourceList entity data model. */
class GetResourceList
{
    public ?string $index = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Request payload for GetResourceList#list. */
class GetResourceListListMatch
{
    public string $id;
}

/** GraphQl entity data model. */
class GraphQl
{
    public ?array $data = null;
    public ?array $error = null;
    public ?string $operation_name = null;
    public string $query;
    public ?array $variable = null;
}

/** Request payload for GraphQl#create. */
class GraphQlCreateData
{
    public ?array $data = null;
    public ?array $error = null;
    public ?string $operation_name = null;
    public string $query;
    public ?array $variable = null;
}

