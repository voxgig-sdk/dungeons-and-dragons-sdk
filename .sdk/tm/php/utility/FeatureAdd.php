<?php
declare(strict_types=1);

// DungeonsAndDragons SDK utility: feature_add

class DungeonsAndDragonsFeatureAdd
{
    public static function call(DungeonsAndDragonsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
