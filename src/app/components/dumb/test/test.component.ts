import { Component, OnInit } from '@angular/core';
import { TestQuestions } from '../../../interfaces/test-question-interface';
import { UserService } from '../../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
    public test: TestQuestions;
    public answers = new FormGroup({});

    private constructControls(testData: TestQuestions): void {
        for (let i = 0; i < testData.questions.length; i++) {
            if (testData.questions[i].answer_type === 'multiple_choice') {
                const options = testData.questions[i].answer_options;
                this.answers.addControl(i.toString(), new FormGroup({}));
                const fg = this.answers.controls[i.toString()] as FormGroup;
                for (let j = 0; j < options.length; j++) {
                    fg.addControl(
                        'opt' + j,
                        new FormControl(false, Validators.required)
                    );
                }
            } else {
                this.answers.addControl(
                    i.toString(),
                    new FormControl('', Validators.required)
                );
            }
        }
        this.test = testData;
    }

    private constructAnswersArray(): Array<any> {
        const arr = [];
        const controls = this.answers.controls;
        Object.keys(controls).forEach(key => {
            const value = controls[key].value;
            if (typeof value === 'object') {
                let result = '';
                Object.keys(value).forEach(element => {
                    result += value[element] + ' ';
                });
                arr.push(result);
            } else {
                arr.push(value);
            }
        });
        console.log(arr);
        return arr;
    }

    public handleAnswersSubmit(): void {
        const arr = this.constructAnswersArray();
        const login = this.userService.getLocalUserInfo().login;
        this.userService.uploadTestResults(login, 'english', arr).subscribe(
            result => {
                console.log(result);
            },
            error1 => console.log('error uploading test results: ', error1)
        );
    }

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getTestData('english').subscribe(
            testData => {
                this.constructControls(testData);
            },
            error => console.log('error loading test: ', error)
        );
    }
}
