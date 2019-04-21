export interface TestInfoInterface {
    test_name: string;
    status: string;
    result?: number;
}

export interface TestResultResponseInfoInterface {
    test_answers?: string;
    score: number;
}
