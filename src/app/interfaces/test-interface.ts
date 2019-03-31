export interface TestInfoInterface {
    test_name: string;
    test_id: number;
    status: string;
    result?: number;
    permission: boolean;
}

export interface TestResultResponseInfoInterface {
    test_answers?: string;
    score: number;
}
