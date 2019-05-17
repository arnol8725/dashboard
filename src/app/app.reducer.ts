import * as fromUI from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import * as fromIngresosEgresos from './ingreso-egreso/ingreso-egreso.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    ui: fromUI.State;
    auth: fromAuth.AuthState;
    items: fromIngresosEgresos.IngresoEgresoState;
}

export const appReducers : ActionReducerMap<AppState> = {
    ui: fromUI.uiReducer,
    auth : fromAuth.AuthReducer
    item : fromIngresosEgresos.ingresoEgresoReducer
};