export class API {
    public static get MAIN(): string {
        return '/api';
    }
    public static get CANDIDATE(): string {
        return '/candidates';
    }

    public static get MANAGER(): string {
        return '/managers';
    }

    public static get STAFF(): string {
        return '/staff';
    }

    public static get REFRESH(): string {
        return `${this.MAIN}/refresh`;
    }

    public static get LOGIN(): string {
        return `${this.MAIN}/login`;
    }

    public static get PROFILE(): string {
        return `${this.MAIN}/profile`;
    }

    public static get CHANGE_PROFILE(): string {
        return `${this.MAIN}/changeProfile`;
    }

    public static get GET_NOTIFICATIONS(): string {
        return `${this.MAIN}/changeProfile`;
    }

    public static get GET_PROFILE_DETAILS(): string {
        return `${this.CANDIDATE}/profile`;
    }

    public static get REGISTER(): string {
        return `${this.CANDIDATE}/register`;
    }
    public static get GET_TEST_INFO(): string {
        return `${this.CANDIDATE}/testInfo`;
    }

    public static get TEST_DATA(): string {
        return `${this.CANDIDATE}/testData`;
    }

    public static get INTERVIEWS(): string {
        return `${this.CANDIDATE}/interviews`;
    }

    public static get CHANGE_PROFILE_DETAILS(): string {
        return `${this.CANDIDATE}/profileDetails`;
    }

    public static get UPDATE_CANDIDATE_STATUS(): string {
        return `${this.MANAGER}/updateStatus`;
    }

    public static get CREATE_INTERVIEW(): string {
        return `${this.MANAGER}/interview`;
    }

    public static get GET_INTERVIEW_LIST(): string {
        return `${this.STAFF}/interviews`;
    }

    public static get CANDIDATES(): {
        UPLOAD: string;
        TEST_RESULTS: string;
        REGISTER: string;
        PROFILE: string;
        TEST_INFO: string;
        TEST_DATA: string;
        INTERVIEWS: string;
        PROFILE_DETAILS: string;
    } {
        const base = `${this.MAIN}/candidates`;

        return {
            UPLOAD: `${base}/upload`,
            TEST_RESULTS: `${base}/testResults`,
            REGISTER: `${base}/register`,
            PROFILE: `${base}/profile`,
            TEST_INFO: `${base}/testInfo`,
            TEST_DATA: `${base}/testData`,
            INTERVIEWS: `${base}/interviews`,
            PROFILE_DETAILS: `${base}/profileDetails`,
        };
    }
}
