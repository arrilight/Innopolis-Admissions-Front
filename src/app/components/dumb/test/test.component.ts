import { Component, OnInit } from '@angular/core';
import { TestQuestions } from '../../../interfaces/test-question-interface';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
    test: TestQuestions;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getTestData('english').subscribe(
            testData => {
                this.test = testData;
            },
            error => console.log('error loading test: ', error)
        );
    }
}
