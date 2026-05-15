<?php
declare(strict_types=1);

// DungeonsAndDragons SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

DungeonsAndDragonsUtility::setRegistrar(function (DungeonsAndDragonsUtility $u): void {
    $u->clean = [DungeonsAndDragonsClean::class, 'call'];
    $u->done = [DungeonsAndDragonsDone::class, 'call'];
    $u->make_error = [DungeonsAndDragonsMakeError::class, 'call'];
    $u->feature_add = [DungeonsAndDragonsFeatureAdd::class, 'call'];
    $u->feature_hook = [DungeonsAndDragonsFeatureHook::class, 'call'];
    $u->feature_init = [DungeonsAndDragonsFeatureInit::class, 'call'];
    $u->fetcher = [DungeonsAndDragonsFetcher::class, 'call'];
    $u->make_fetch_def = [DungeonsAndDragonsMakeFetchDef::class, 'call'];
    $u->make_context = [DungeonsAndDragonsMakeContext::class, 'call'];
    $u->make_options = [DungeonsAndDragonsMakeOptions::class, 'call'];
    $u->make_request = [DungeonsAndDragonsMakeRequest::class, 'call'];
    $u->make_response = [DungeonsAndDragonsMakeResponse::class, 'call'];
    $u->make_result = [DungeonsAndDragonsMakeResult::class, 'call'];
    $u->make_point = [DungeonsAndDragonsMakePoint::class, 'call'];
    $u->make_spec = [DungeonsAndDragonsMakeSpec::class, 'call'];
    $u->make_url = [DungeonsAndDragonsMakeUrl::class, 'call'];
    $u->param = [DungeonsAndDragonsParam::class, 'call'];
    $u->prepare_auth = [DungeonsAndDragonsPrepareAuth::class, 'call'];
    $u->prepare_body = [DungeonsAndDragonsPrepareBody::class, 'call'];
    $u->prepare_headers = [DungeonsAndDragonsPrepareHeaders::class, 'call'];
    $u->prepare_method = [DungeonsAndDragonsPrepareMethod::class, 'call'];
    $u->prepare_params = [DungeonsAndDragonsPrepareParams::class, 'call'];
    $u->prepare_path = [DungeonsAndDragonsPreparePath::class, 'call'];
    $u->prepare_query = [DungeonsAndDragonsPrepareQuery::class, 'call'];
    $u->result_basic = [DungeonsAndDragonsResultBasic::class, 'call'];
    $u->result_body = [DungeonsAndDragonsResultBody::class, 'call'];
    $u->result_headers = [DungeonsAndDragonsResultHeaders::class, 'call'];
    $u->transform_request = [DungeonsAndDragonsTransformRequest::class, 'call'];
    $u->transform_response = [DungeonsAndDragonsTransformResponse::class, 'call'];
});
