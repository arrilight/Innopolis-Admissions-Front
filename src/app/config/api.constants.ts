export class API {
    public static get MAIN(): string {
        return 'https://inno-admissions.tk/api';
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
