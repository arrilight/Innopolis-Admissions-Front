export class API {
    public static get MAIN(): string {
        return '/api';
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
        return `${this.MAIN}/getNotifications`;
    }

    public static get CANDIDATE(): {
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

    public static get MANAGER(): {
        UPDATE_STATUS: string;
        INTERVIEW: string;
    } {
        const baseUrl = `${this.MAIN}/managers`;

        return {
            UPDATE_STATUS: `${baseUrl}/updateStatus`,
            INTERVIEW: `${baseUrl}/interview`,
        };
    }

    public static get STAFF(): {
        GET_INTERVIEW_LIST: string;
        GRADE: string;
    } {
        const baseUrl = `${this.MAIN}/staff`;

        return {
            GET_INTERVIEW_LIST: `${baseUrl}/interviews`,
            GRADE: `${baseUrl}/grade`,
        };
    }
}
