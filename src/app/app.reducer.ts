import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './store/ui.reducer';
// import * as fromTonies from './store/tonies.reducer'
import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface AppState {
  ui: fromUI.State;
  // tonies: fromTonies.State;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  // tonies: fromTonies.toniesReducer
};

export const getUiState = createFeatureSelector('ui');
export const getIsLoading = createSelector(getUiState, (state: fromUI.State) => state.isLoading);
