import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTests from "./tests.reducer";
import { TestsState } from "./tests.reducer";

export const getTestsState = createFeatureSelector<fromTests.TestsState>(
    "tests"
);

export const getTestsPool = createSelector(
    getTestsState,
    fromTests.selectAll
);
export const getIsTestsLoading = createSelector(
    getTestsState,
    (state: TestsState) => state.isLoading
);
