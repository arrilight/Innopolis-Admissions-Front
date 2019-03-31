import {ActionReducerMap} from '@ngrx/store';
import * as fromTests from './tests/tests.reducer';

export interface GlobalState {
  tests: fromTests.TestsState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  tests: fromTests.reducer,
};

export const getState = (state: GlobalState) => state;
