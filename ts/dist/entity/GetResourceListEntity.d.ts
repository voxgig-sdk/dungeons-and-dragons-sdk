import { DungeonsAndDragonsEntityBase } from '../DungeonsAndDragonsEntityBase';
import type { DungeonsAndDragonsSDK } from '../DungeonsAndDragonsSDK';
import type { Control } from '../types';
import type { GetResourceList, GetResourceListListMatch } from '../DungeonsAndDragonsTypes';
declare class GetResourceListEntity extends DungeonsAndDragonsEntityBase<GetResourceList> {
    constructor(client: DungeonsAndDragonsSDK, entopts: any);
    make(this: GetResourceListEntity): GetResourceListEntity;
    list(this: any, reqmatch?: GetResourceListListMatch, ctrl?: Control): Promise<GetResourceListEntity[]>;
}
export { GetResourceListEntity };
