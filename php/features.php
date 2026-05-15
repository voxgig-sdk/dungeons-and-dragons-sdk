<?php
declare(strict_types=1);

// DungeonsAndDragons SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DungeonsAndDragonsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DungeonsAndDragonsBaseFeature();
            case "test":
                return new DungeonsAndDragonsTestFeature();
            default:
                return new DungeonsAndDragonsBaseFeature();
        }
    }
}
