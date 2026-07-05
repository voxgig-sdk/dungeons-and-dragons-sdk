# Typed models for the DungeonsAndDragons SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetApiRoot(TypedDict, total=False):
    ability_score: str
    alignment: str
    background: str
    condition: str
    damage_type: str
    equipment: str
    equipment_category: str
    feat: str
    feature: str
    key: str
    language: str
    magic_item: str
    magic_school: str
    monster: str
    proficiency: str
    race: str
    rule: str
    rule_section: str
    skill: str
    spell: str
    subclass: str
    subrace: str
    trait: str
    weapon_property: str


class GetApiRootLoadMatch(TypedDict, total=False):
    ability_score: str
    alignment: str
    background: str
    condition: str
    damage_type: str
    equipment: str
    equipment_category: str
    feat: str
    feature: str
    key: str
    language: str
    magic_item: str
    magic_school: str
    monster: str
    proficiency: str
    race: str
    rule: str
    rule_section: str
    skill: str
    spell: str
    subclass: str
    subrace: str
    trait: str
    weapon_property: str


class GetResourceByIndex(TypedDict, total=False):
    index: str
    name: str
    url: str


class GetResourceByIndexLoadMatch(TypedDict):
    index: str
    resource: str


class GetResourceList(TypedDict, total=False):
    index: str
    name: str
    url: str


class GetResourceListListMatch(TypedDict):
    id: str


class GraphQlRequired(TypedDict):
    query: str


class GraphQl(GraphQlRequired, total=False):
    data: dict
    error: list
    operation_name: str
    variable: dict


class GraphQlCreateDataRequired(TypedDict):
    query: str


class GraphQlCreateData(GraphQlCreateDataRequired, total=False):
    data: dict
    error: list
    operation_name: str
    variable: dict
