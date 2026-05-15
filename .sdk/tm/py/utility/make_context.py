# DungeonsAndDragons SDK utility: make_context

from core.context import DungeonsAndDragonsContext


def make_context_util(ctxmap, basectx):
    return DungeonsAndDragonsContext(ctxmap, basectx)
