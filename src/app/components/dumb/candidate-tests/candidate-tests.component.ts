import { Component, OnInit } from '@angular/core';
import {TestComponent} from '../test/test.component';
import {NbWindowService} from '@nebular/theme';

@Component({
    selector: 'app-candidate-tests',
    templateUrl: './candidate-tests.component.html',
    styleUrls: ['./candidate-tests.component.css'],
})
export class CandidateTestsComponent implements OnInit {
    shouldOpenTest = false;
    windowRef;
    tests = [
        { title: 'Math', status: 'Not taken', result: '-' },
        { title: 'CS', status: 'Not taken', result: '-' },
        { title: 'English', status: 'Not taken', result: '-' },
    ];

    constructor(private windowService: NbWindowService) {}

    ngOnInit() {}

    openTest(testName: string) {
      this.windowService.open(TestComponent, { title: testName });
    }
}
