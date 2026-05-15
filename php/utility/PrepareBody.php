<?php
declare(strict_types=1);

// DungeonsAndDragons SDK utility: prepare_body

class DungeonsAndDragonsPrepareBody
{
    public static function call(DungeonsAndDragonsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
