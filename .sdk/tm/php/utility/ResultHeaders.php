<?php
declare(strict_types=1);

// DungeonsAndDragons SDK utility: result_headers

class DungeonsAndDragonsResultHeaders
{
    public static function call(DungeonsAndDragonsContext $ctx): ?DungeonsAndDragonsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
