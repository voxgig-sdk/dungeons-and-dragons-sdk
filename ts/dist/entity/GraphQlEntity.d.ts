import { DungeonsAndDragonsEntityBase } from '../DungeonsAndDragonsEntityBase';
import type { DungeonsAndDragonsSDK } from '../DungeonsAndDragonsSDK';
import type { Control } from '../types';
import type { GraphQl, GraphQlCreateData } from '../DungeonsAndDragonsTypes';
declare class GraphQlEntity extends DungeonsAndDragonsEntityBase<GraphQl> {
    constructor(client: DungeonsAndDragonsSDK, entopts: any);
    make(this: GraphQlEntity): GraphQlEntity;
    create(this: any, reqdata?: GraphQlCreateData, ctrl?: Control): Promise<GraphQlEntity>;
}
export { GraphQlEntity };
