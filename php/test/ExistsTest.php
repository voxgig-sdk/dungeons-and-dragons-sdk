<?php
declare(strict_types=1);

// DungeonsAndDragons SDK exists test

require_once __DIR__ . '/../dungeonsanddragons_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DungeonsAndDragonsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
