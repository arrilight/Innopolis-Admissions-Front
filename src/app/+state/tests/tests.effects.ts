import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import {
    LoadTestsPoolFail,
    LoadTestsPoolSuccess,
    TestsActionTypes,
} from "./tests.actions";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class TestsEffects {
    // This effect should send HTTPS request to the server
    @Effect()
    loadTestsPool: Observable<Action> = this.actions$.pipe(
        ofType(TestsActionTypes.LOAD_TESTS_POOL),
        map(() => new LoadTestsPoolSuccess({ tests: [] })),
        catchError(error => of(new LoadTestsPoolFail({ error })))
    );

    constructor(private actions$: Actions) {}
}
