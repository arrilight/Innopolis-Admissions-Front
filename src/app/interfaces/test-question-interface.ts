export interface TestQuestionInterface {
    question: string;
    answer_type: string;
    answer_options: string[];
}

export interface TestQuestions {
    questions: TestQuestionInterface[];
}
