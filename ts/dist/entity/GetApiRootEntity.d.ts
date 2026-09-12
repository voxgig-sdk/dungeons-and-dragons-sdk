import { DungeonsAndDragonsEntityBase } from '../DungeonsAndDragonsEntityBase';
import type { DungeonsAndDragonsSDK } from '../DungeonsAndDragonsSDK';
import type { Control } from '../types';
import type { GetApiRoot, GetApiRootLoadMatch } from '../DungeonsAndDragonsTypes';
declare class GetApiRootEntity extends DungeonsAndDragonsEntityBase<GetApiRoot> {
    constructor(client: DungeonsAndDragonsSDK, entopts: any);
    make(this: GetApiRootEntity): GetApiRootEntity;
    load(this: any, reqmatch?: GetApiRootLoadMatch, ctrl?: Control): Promise<GetApiRootEntity>;
}
export { GetApiRootEntity };
