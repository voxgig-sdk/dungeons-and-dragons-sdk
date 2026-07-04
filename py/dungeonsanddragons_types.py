# Typed models for the DungeonsAndDragons SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetApiRoot:
    ability_score: Optional[str] = None
    alignment: Optional[str] = None
    background: Optional[str] = None
    condition: Optional[str] = None
    damage_type: Optional[str] = None
    equipment: Optional[str] = None
    equipment_category: Optional[str] = None
    feat: Optional[str] = None
    feature: Optional[str] = None
    key: Optional[str] = None
    language: Optional[str] = None
    magic_item: Optional[str] = None
    magic_school: Optional[str] = None
    monster: Optional[str] = None
    proficiency: Optional[str] = None
    race: Optional[str] = None
    rule: Optional[str] = None
    rule_section: Optional[str] = None
    skill: Optional[str] = None
    spell: Optional[str] = None
    subclass: Optional[str] = None
    subrace: Optional[str] = None
    trait: Optional[str] = None
    weapon_property: Optional[str] = None


@dataclass
class GetApiRootLoadMatch:
    ability_score: Optional[str] = None
    alignment: Optional[str] = None
    background: Optional[str] = None
    condition: Optional[str] = None
    damage_type: Optional[str] = None
    equipment: Optional[str] = None
    equipment_category: Optional[str] = None
    feat: Optional[str] = None
    feature: Optional[str] = None
    key: Optional[str] = None
    language: Optional[str] = None
    magic_item: Optional[str] = None
    magic_school: Optional[str] = None
    monster: Optional[str] = None
    proficiency: Optional[str] = None
    race: Optional[str] = None
    rule: Optional[str] = None
    rule_section: Optional[str] = None
    skill: Optional[str] = None
    spell: Optional[str] = None
    subclass: Optional[str] = None
    subrace: Optional[str] = None
    trait: Optional[str] = None
    weapon_property: Optional[str] = None


@dataclass
class GetResourceByIndex:
    index: Optional[str] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class GetResourceByIndexLoadMatch:
    index: str
    resource: str


@dataclass
class GetResourceList:
    index: Optional[str] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class GetResourceListListMatch:
    id: str


@dataclass
class GraphQl:
    query: str
    data: Optional[dict] = None
    error: Optional[list] = None
    operation_name: Optional[str] = None
    variable: Optional[dict] = None


@dataclass
class GraphQlCreateData:
    data: Optional[dict] = None
    error: Optional[list] = None
    operation_name: Optional[str] = None
    query: Optional[str] = None
    variable: Optional[dict] = None

