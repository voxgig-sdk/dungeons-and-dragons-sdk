<?php
declare(strict_types=1);

// DungeonsAndDragons SDK utility: result_body

class DungeonsAndDragonsResultBody
{
    public static function call(DungeonsAndDragonsContext $ctx): ?DungeonsAndDragonsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
