import {Action} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {TestInfoInterface} from '../../interfaces/test-interface';

export enum TestsActionTypes {
  LOAD_TESTS_POOL = '[Tests] Load Tests Pool',
  LOAD_TESTS_POOL_SUCCESS = '[Tests] Load Tests Pool Success',
  LOAD_TESTS_POOL_FAIL = '[Tests] Load Test Fail',
}

export class TestsAction implements Action {
  readonly type: TestsActionTypes;
}

export class LoadTestsPool implements Action {
  readonly type = TestsActionTypes.LOAD_TESTS_POOL;

  constructor(public payload = null) {}
}

export class LoadTestsPoolSuccess implements Action {
  readonly type = TestsActionTypes.LOAD_TESTS_POOL_SUCCESS;

  constructor(public payload: { tests: TestInfoInterface[] }) {
  }
}

export class LoadTestsPoolFail implements Action {
  readonly type = TestsActionTypes.LOAD_TESTS_POOL_FAIL;

  constructor(public payload: { error: HttpErrorResponse }) {
  }
}
