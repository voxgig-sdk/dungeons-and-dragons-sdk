import { GetApiRootEntity } from './entity/GetApiRootEntity';
import { GetResourceByIndexEntity } from './entity/GetResourceByIndexEntity';
import { GetResourceListEntity } from './entity/GetResourceListEntity';
import { GraphQlEntity } from './entity/GraphQlEntity';
export type * from './DungeonsAndDragonsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { DungeonsAndDragonsEntityBase } from './DungeonsAndDragonsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class DungeonsAndDragonsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetApiRoot(entopts?: Record<string, any>): GetApiRootEntity;
    GetResourceByIndex(entopts?: Record<string, any>): GetResourceByIndexEntity;
    GetResourceList(entopts?: Record<string, any>): GetResourceListEntity;
    GraphQl(entopts?: Record<string, any>): GraphQlEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): DungeonsAndDragonsSDK;
    tester(testopts?: any, sdkopts?: any): DungeonsAndDragonsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof DungeonsAndDragonsSDK;
export { stdutil, config, BaseFeature, DungeonsAndDragonsEntityBase, DungeonsAndDragonsSDK, SDK, };
