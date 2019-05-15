import { Action } from '@ngrx/store';
import * as fromUI from './ui.actions';


export interface State{
    isLoading : boolean;
}

const initState : State = {
    isLoading:false
}

export function uiReducer(state :State = initState, action: Action) {
    switch (action.type) {
      case fromUI.ActionTypes.ACTIVAR_LOADING:
        return { isLoading: true };
   
      case fromUI.ActionTypes.DESACTIVAR_LOADING:
        return { isLoading: false };
   
      default:
        return state;
    }
  }