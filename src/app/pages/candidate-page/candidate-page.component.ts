import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { GlobalState } from '../../+state';
import { Store, select } from '@ngrx/store';
import { LoadTestsPool } from '../../+state/tests/tests.actions';
import { tap } from 'rxjs/internal/operators/tap';
import { getIsTestsLoading } from '../../+state/tests/tests.selectors';

@Component({
    selector: 'app-candidate-page',
    templateUrl: './candidate-page.component.html',
    styleUrls: ['./candidate-page.component.css'],
})
export class CandidatePageComponent implements OnInit {
    items = [
        { title: 'Notification 1' },
        { title: 'A looooong text of a notification' },
        { title: 'Notification 2' },
    ];

    menuList: NbMenuItem[] = [
        {
            icon: 'fas fa-file-invoice',
            title: 'Profile information',
            link: '',
        },
        {
            icon: 'fas far fa-edit',
            title: 'Tests',
            link: '',
        },
        {
            icon: 'fas fa-user',
            title: 'Interviews',
            link: '',
        },
    ];

    currentSubPage = 'Profile information';

    constructor(private store$: Store<GlobalState>) {
        this.store$.pipe(
            select(getIsTestsLoading),
            tap(value => console.warn(value))
        );
    }

    ngOnInit() {
        this.store$.dispatch(new LoadTestsPool());
        console.warn('on init');
        this.store$
            .pipe(
                select(getIsTestsLoading),
                tap(value => console.warn(value))
            )
            .subscribe();
    }

    setSubPage(name: string) {
        this.currentSubPage = name;
    }
}
