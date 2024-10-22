<?php
namespace Traits;

Trait ResponseFormatter{
    public function responseFormatter($code, $message, $data = null){
        return json_decode([
            "code" => $code,
            "message" => $message,
            "data" => $data
        ]);
    }
}