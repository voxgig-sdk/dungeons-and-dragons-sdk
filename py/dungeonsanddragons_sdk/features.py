# DungeonsAndDragons SDK feature factory

from dungeonsanddragons_sdk.feature.base_feature import DungeonsAndDragonsBaseFeature
from dungeonsanddragons_sdk.feature.test_feature import DungeonsAndDragonsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DungeonsAndDragonsBaseFeature(),
        "test": lambda: DungeonsAndDragonsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
