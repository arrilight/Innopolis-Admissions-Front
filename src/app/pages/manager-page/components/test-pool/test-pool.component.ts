import { Component } from '@angular/core';

@Component({
    selector: 'app-test-pool',
    templateUrl: './test-pool.component.html',
    styleUrls: ['./test-pool.component.less'],
})
export class TestPoolComponent {
    testsInPull = [
        { title: 'Math', status: 'Not taken', result: '-' },
        { title: 'CS', status: 'Not taken', result: '-' },
        { title: 'English', status: 'Not taken', result: '-' },
    ];

    assignedTests = [
        { title: 'Math', status: 'Not taken', result: '-' },
        { title: 'CS', status: 'Not taken', result: '-' },
    ];
}
