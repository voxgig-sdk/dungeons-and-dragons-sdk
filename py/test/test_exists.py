# ProjectName SDK exists test

import pytest
from dungeonsanddragons_sdk import DungeonsAndDragonsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DungeonsAndDragonsSDK.test(None, None)
        assert testsdk is not None
