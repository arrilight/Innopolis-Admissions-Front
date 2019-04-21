import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
    LoadTestsPoolFail,
    LoadTestsPoolSuccess,
    TestsAction,
    TestsActionTypes,
} from './tests.actions';
import { ActionReducer } from '@ngrx/store';
import { TestInfoInterface } from '../../interfaces/test-interface';

export const testsApapter = createEntityAdapter<TestInfoInterface>({
    selectId: ({ test_name }: TestInfoInterface) => test_name,
});

export interface TestsState extends EntityState<TestInfoInterface> {
    isLoading: boolean;
}

export const testsInitialState: TestsState = testsApapter.getInitialState({
    isLoading: false,
});

const reducers: Record<
    TestsActionTypes,
    ActionReducer<TestsState, TestsAction>
> = {
    [TestsActionTypes.LOAD_TESTS_POOL]: loadTestsPool,
    [TestsActionTypes.LOAD_TESTS_POOL_SUCCESS]: loadTestsPoolSuccess,
    [TestsActionTypes.LOAD_TESTS_POOL_FAIL]: loadTestsPoolFail,
};

export function loadTestsPool(state: TestsState): TestsState {
    return { ...state, isLoading: true };
}

export function loadTestsPoolSuccess(
    state: TestsState,
    { payload: { tests } }: LoadTestsPoolSuccess
): TestsState {
    return testsApapter.addMany(tests, { ...state, isLoading: false });
}

export function loadTestsPoolFail(
    state: TestsState,
    { payload: { error } }: LoadTestsPoolFail
): TestsState {
    return { ...state, isLoading: false };
}

export function reducer(
    state = testsInitialState,
    action: TestsAction
): TestsState {
    return action.type in reducers
        ? reducers[action.type](state, action)
        : state;
}

export const { selectEntities, selectAll } = testsApapter.getSelectors();
