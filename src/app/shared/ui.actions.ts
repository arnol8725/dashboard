import { Action } from '@ngrx/store';



export enum ActionTypes {
    ACTIVAR_LOADING = '[UI Loading] Cargando...',
    DESACTIVAR_LOADING = '[UI Loading] Fin de carga...'
   
  }

  export class ActivarLoadingAction implements Action {
    readonly type = ActionTypes.ACTIVAR_LOADING;
  } 
  export class DesactivarLoadingAction implements Action {
    readonly type = ActionTypes.DESACTIVAR_LOADING;
  }


  export type acciones = ActivarLoadingAction |
                          DesactivarLoadingAction;