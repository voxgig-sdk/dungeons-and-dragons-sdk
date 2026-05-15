<?php
declare(strict_types=1);

// DungeonsAndDragons SDK utility: prepare_headers

class DungeonsAndDragonsPrepareHeaders
{
    public static function call(DungeonsAndDragonsContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
