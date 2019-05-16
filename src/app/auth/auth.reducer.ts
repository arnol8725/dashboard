

import * as fromAuth from './auth.actions';
import { State } from '../shared/ui.reducer';
import { User } from './user.model';
import { Action, ActionReducerMap } from '@ngrx/store';

export interface AuthState{
      autenticado: boolean;
      user: User;
}

const estadoInicial : AuthState = {
    autenticado : false,
    user : null
}

export function AuthReducer(state : AuthState = estadoInicial, action: fromAuth.accionesAuth) : AuthState {
    switch (action.type) {
      case fromAuth.SET_USER:
            return {
                autenticado: true,
                user : {... action.user }
            };
      default:
            return state;
    }
  }