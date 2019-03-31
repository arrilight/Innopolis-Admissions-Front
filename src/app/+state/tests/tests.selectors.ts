import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTests from './tests.reducer';

export const getTestsState = createFeatureSelector<fromTests.TestsState>('tests');

export const getTestsPool = createSelector(getTestsState, fromTests.selectAll);
