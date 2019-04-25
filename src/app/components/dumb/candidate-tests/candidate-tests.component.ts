import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestInfoInterface } from '../../../interfaces/test-interface';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-candidate-tests',
    templateUrl: './candidate-tests.component.html',
    styleUrls: ['./candidate-tests.component.css'],
})
export class CandidateTestsComponent implements OnInit {
    tests: TestInfoInterface[];

    testNamesMap = {
        math: 'Math',
        informatics: 'CS',
        english: 'English',
    };

    constructor(private router: Router, private userService: UserService) {}

    ngOnInit() {
        this.userService
            .getTestsInfo(this.userService.getLocalUserInfo().login)
            .subscribe(
                tests => (this.tests = tests),
                error => console.log('error while loading tests: ', error)
            );
    }

    openTest(testName: string) {
        this.router.navigate([`candidate/test/123`]);
    }
}
