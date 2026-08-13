# DungeonsAndDragons SDK utility: make_context

from projectname_sdk.core.context import DungeonsAndDragonsContext


def make_context_util(ctxmap, basectx):
    return DungeonsAndDragonsContext(ctxmap, basectx)
