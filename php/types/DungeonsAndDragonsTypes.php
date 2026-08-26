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
    public ?string $abilityscores = null;
    public ?string $alignments = null;
    public ?string $backgrounds = null;
    public ?string $classes = null;
    public ?string $conditions = null;
    public ?string $damagetypes = null;
    public ?string $equipment = null;
    public ?string $equipmentcategories = null;
    public ?string $feats = null;
    public ?string $features = null;
    public ?string $key = null;
    public ?string $languages = null;
    public ?string $magicitems = null;
    public ?string $magicschools = null;
    public ?string $monsters = null;
    public ?string $proficiencies = null;
    public ?string $races = null;
    public ?string $rules = null;
    public ?string $rulesections = null;
    public ?string $skills = null;
    public ?string $spells = null;
    public ?string $subclasses = null;
    public ?string $subraces = null;
    public ?string $traits = null;
    public ?string $weaponproperties = null;
}

/** Request payload for GetApiRoot#load. */
class GetApiRootLoadMatch
{
    public ?string $abilityscores = null;
    public ?string $alignments = null;
    public ?string $backgrounds = null;
    public ?string $classes = null;
    public ?string $conditions = null;
    public ?string $damagetypes = null;
    public ?string $equipment = null;
    public ?string $equipmentcategories = null;
    public ?string $feats = null;
    public ?string $features = null;
    public ?string $key = null;
    public ?string $languages = null;
    public ?string $magicitems = null;
    public ?string $magicschools = null;
    public ?string $monsters = null;
    public ?string $proficiencies = null;
    public ?string $races = null;
    public ?string $rules = null;
    public ?string $rulesections = null;
    public ?string $skills = null;
    public ?string $spells = null;
    public ?string $subclasses = null;
    public ?string $subraces = null;
    public ?string $traits = null;
    public ?string $weaponproperties = null;
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
    public ?string $id = null;
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
    public ?array $errors = null;
    public ?string $operationName = null;
    public string $query;
    public ?array $variables = null;
}

/** Request payload for GraphQl#create. */
class GraphQlCreateData
{
    public ?array $data = null;
    public ?array $errors = null;
    public ?string $operationName = null;
    public string $query;
    public ?array $variables = null;
}

