# DungeonsAndDragons SDK feature factory

from dungeonsanddragons_sdk.feature.base_feature import DungeonsAndDragonsBaseFeature
from dungeonsanddragons_sdk.feature.ratelimit_feature import DungeonsAndDragonsRatelimitFeature
from dungeonsanddragons_sdk.feature.retry_feature import DungeonsAndDragonsRetryFeature
from dungeonsanddragons_sdk.feature.test_feature import DungeonsAndDragonsTestFeature
from dungeonsanddragons_sdk.feature.timeout_feature import DungeonsAndDragonsTimeoutFeature


_FEATURES = {
    "base": lambda: DungeonsAndDragonsBaseFeature(),
    "ratelimit": lambda: DungeonsAndDragonsRatelimitFeature(),
    "retry": lambda: DungeonsAndDragonsRetryFeature(),
    "test": lambda: DungeonsAndDragonsTestFeature(),
    "timeout": lambda: DungeonsAndDragonsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
