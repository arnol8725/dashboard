import { Action } from '@ngrx/store';
import { IngresoEgreso } from './ingreso-egreso.model';
export enum statesIngresoEgreso {
    SET_ITEMS = '[Ingreso Egreso] Set Items',
    UNSET_ITEMS = '[Ingreso Egreso] UNSET_Items'
}


export class SetItemsAction implements Action{
    readonly type = statesIngresoEgreso.SET_ITEMS;
    constructor(public items: IngresoEgreso[]){}
}
export class UnSetItemsAction implements Action{
    readonly type = statesIngresoEgreso.UNSET_ITEMS;
   
}

export type accionesIngresoEgreso= SetItemsAction |
                                   UnSetItemsAction;