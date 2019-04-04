import { Injectable } from '@angular/core';
import { UserProfileInterface } from '../interfaces/user-profile-interface';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { API } from '../config/api.constants';
import { BackendService } from './backend/backend.service';
import { UserProfileDetailsInterface } from '../interfaces/user-profile-details-interface';
import { NotificationInterface } from '../interfaces/notification-interface';
import { TestInfoInterface } from '../interfaces/test-interface';
import { TestQuestionInterface } from '../interfaces/test-question-interface';
import { InterviewInterface } from '../interfaces/interview-interface';

@Injectable()
export class UserService {
    constructor(private backend: BackendService) {}

    public getProfileInfo(login: string): Observable<UserProfileInterface> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<UserProfileInterface>(
            API.PROFILE + `?login=${login}`,
            {
                headers,
            }
        );
    }

    public getProfileDetails(
        login: string
    ): Observable<UserProfileDetailsInterface> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<UserProfileDetailsInterface>(
            API.CANDIDATE.PROFILE_DETAILS + `?login=${login}`,
            {
                headers,
            }
        );
    }

    public changeProfileInfo(
        login: string,
        newInfo: UserProfileInterface
    ): Observable<any> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.post$<any>(API.CHANGE_PROFILE + `?login=${login}`, {
            body: newInfo,
            headers,
        });
    }

    public changeProfileDetailsInfo(
        login: string,
        newInfo: UserProfileDetailsInterface
    ): Observable<any> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.post$<UserProfileDetailsInterface>(
            API.CANDIDATE.PROFILE_DETAILS + `?login=${login}`,
            {
                body: newInfo,
                headers,
            }
        );
    }

    public updateCandidateStatus(
        login: string,
        status: string
    ): Observable<any> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.post$<UserProfileDetailsInterface>(
            // TODO from the documentation it is absolutely unclear how to send this request. Fix!
            API.MANAGER.UPDATE_STATUS + `?login=${login}`,
            {
                body: { status },
                headers,
            }
        );
    }

    public getNotifications(
        login: string
    ): Observable<[NotificationInterface]> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<[NotificationInterface]>(
            API.GET_NOTIFICATIONS + `?login=${login}`,
            {
                headers,
            }
        );
    }

    public getTestsInfo(login: string): Observable<[TestInfoInterface]> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<[TestInfoInterface]>(
            API.CANDIDATE.TEST_INFO + `?login=${login}`,
            {
                headers,
            }
        );
    }

    public getTestData(testName: string): Observable<[TestQuestionInterface]> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<[TestQuestionInterface]>(
            API.CANDIDATE.TEST_DATA + `?test_name=${testName}`,
            {
                headers,
            }
        );
    }

    public getInterviewData(login: string): Observable<InterviewInterface> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<InterviewInterface>(
            API.CANDIDATE.INTERVIEWS + `?login=${login}`,
            {
                headers,
            }
        );
    }

    public createInterview(
        candidateLogin: string,
        staffLogin: string,
        date: Date
    ): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.post$<any>(
            // TODO from the documentation it is absolutely unclear how to send this request. Fix!
            API.MANAGER.INTERVIEW,
            {
                body: { candidateLogin, staffLogin, date },
                headers,
            }
        );
    }

    public getInterviewList(login: string): Observable<[InterviewInterface]> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<[InterviewInterface]>(
            API.STAFF.GET_INTERVIEW_LIST + `?login=${login}`,
            {
                headers,
            }
        );
    }

    public saveLocalUserInfo(login, role, token) {
        const userInfo: LocalUserInfoInterface = {
            login,
            role,
            token,
        };
        localStorage.setItem('user', JSON.stringify(userInfo));
    }
    public getLocalUserInfo(): LocalUserInfoInterface {
        return JSON.parse(localStorage.getItem('user'));
    }
    public getMyRole() {
        return localStorage.getItem('role');
    }
    public removeLocalUserInfo() {
        localStorage.removeItem('user');
    }
}
