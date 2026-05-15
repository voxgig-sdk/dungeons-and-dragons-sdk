<?php
declare(strict_types=1);

// DungeonsAndDragons SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DungeonsAndDragonsMakeContext
{
    public static function call(array $ctxmap, ?DungeonsAndDragonsContext $basectx): DungeonsAndDragonsContext
    {
        return new DungeonsAndDragonsContext($ctxmap, $basectx);
    }
}
