import { Component, Input, OnInit } from '@angular/core';
import { TestQuestionInterface } from '../../../interfaces/test-question-interface';
import { NbWindowRef } from '@nebular/theme';

interface QuestionsInterface {
    questions: TestQuestionInterface[];
}

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
    // @Input()
    // test: QuestionsInterface;

    test = {
        questions: [
            {
                question:
                    ' From the given sentence select the word or phrase that is incorrect: The majority to the news is about violance or scandal.',
                answer_type: 'single_choice',
                answer_options: ['The', 'to', 'news', 'violence'],
            },
            {
                question:
                    'He was so wealthy that his friends always wondered how he had managed to make such a ___',
                answer_type: 'single_choice',
                answer_options: ['fortune', 'money', 'richness', 'cash'],
            },
            {
                question:
                    'The student could not answer the question, so he ____',
                answer_type: 'single_choice',
                answer_options: [
                    'gave off',
                    'gave into',
                    'gave up',
                    'gave away',
                ],
            },
            {
                question:
                    'Replace the word in the sentence with a suitable phrasal verb: So when do the children ___ for Christmas? (close for the holidays)',
                answer_type: 'open_anser',
                answer_options: [],
            },
            {
                question:
                    'Replace the word in the sentence with a suitable phrasal verb: I haven?t seen you in so long! We have to a date for lunch! (arrange)',
                answer_type: 'open_anser',
                answer_options: [],
            },
            {
                question: 'Select only positive adjectives',
                answer_type: 'multiple_choice',
                answer_options: [
                    'She had an elegant figure and she walked well.',
                    'We ordered a bigger cake than usual in case unexpected guests came to the party.',
                    'The waterfall at Skakavac is one of the most attractive sites in the vicinity of Sarajevo.',
                    'Trains are the most expensive transport in London.',
                ],
            },
            {
                question: 'Select only irregular verbs.',
                answer_type: 'multiple_choice',
                answer_options: ['arise', 'earn', 'accept', 'behold'],
            },
        ],
    };

    ngOnInit() {}
}
