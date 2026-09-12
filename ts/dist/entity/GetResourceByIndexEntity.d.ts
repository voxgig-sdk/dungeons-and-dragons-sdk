import { DungeonsAndDragonsEntityBase } from '../DungeonsAndDragonsEntityBase';
import type { DungeonsAndDragonsSDK } from '../DungeonsAndDragonsSDK';
import type { Control } from '../types';
import type { GetResourceByIndex, GetResourceByIndexLoadMatch } from '../DungeonsAndDragonsTypes';
declare class GetResourceByIndexEntity extends DungeonsAndDragonsEntityBase<GetResourceByIndex> {
    constructor(client: DungeonsAndDragonsSDK, entopts: any);
    make(this: GetResourceByIndexEntity): GetResourceByIndexEntity;
    load(this: any, reqmatch?: GetResourceByIndexLoadMatch, ctrl?: Control): Promise<GetResourceByIndexEntity>;
}
export { GetResourceByIndexEntity };
