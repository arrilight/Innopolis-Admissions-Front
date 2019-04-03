import { Component, Input, OnInit } from '@angular/core';
import { TestQuestionInterface } from '../../../interfaces/test-question-interface';
import {NbWindowRef} from '@nebular/theme';

interface QuestionsInterface {
    questions: TestQuestionInterface[];
}

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
    @Input()
    test: QuestionsInterface;

    constructor(protected windowRef: NbWindowRef) {}

    ngOnInit() {}
}
