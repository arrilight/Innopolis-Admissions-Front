import { Injectable } from '@angular/core';
import { UserProfileInterface } from '../../interfaces/user-profile-interface';
import { Observable, from, forkJoin } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { API } from '../../config/api.constants';
import { BackendService } from '../backend/backend.service';
import { UserProfileDetailsInterface } from '../../interfaces/user-profile-details-interface';
import { NotificationInterface } from '../../interfaces/notification-interface';
import { TestInfoInterface } from '../../interfaces/test-interface';
import { TestQuestions } from '../../interfaces/test-question-interface';
import { InterviewInterface } from '../../interfaces/interview-interface';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { UserDetailsDtoInterface } from './dto/user-details-dto.interface';
import { LocalUserInfoInterface } from '../../interfaces/local-user-info-interface';

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
            API.CANDIDATE.PROFILE + `?login=${login}`,
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

    public getTestData(testName: string): Observable<TestQuestions> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.get$<TestQuestions>(
            API.CANDIDATE.TEST_DATA + `?test_name=${testName}`,
            {
                headers,
            }
        );
    }

    public uploadTestResults(
        login: string,
        testName: string,
        answers: any[]
    ): Observable<any> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.post$<number>(API.CANDIDATE.TEST_RESULTS, {
            body: {
                login,
                testName,
                answers,
            },
            headers,
        });
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

    // public getStaffInterviewsList(
    //     login: string
    // ): Observable<[InterviewInterface]> {
    public getStaffInterviewsList(
        login: string
    ): Observable<InterviewInterface[]> {
        if (!login) {
            login = this.getLocalUserInfo().login;
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend
            .get$<InterviewInterface[]>(
                API.STAFF.GET_INTERVIEW_LIST + `?login=${login}`,
                {
                    headers,
                }
            )
            .pipe(
                tap((interviews: InterviewInterface[]) =>
                    interviews.map(
                        interview => (interview.date = new Date(interview.date))
                    )
                )
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

    public gradeStudent(login: string, grade: string): void {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.backend
            .post$<any>(API.STAFF.GRADE, {
                body: { student_login: login, grade },
                headers,
            })
            .subscribe();
    }

    public getUsers$(
        role: string,
        userstatus?: string
    ): Observable<UserProfileInterface[]> {
        const headers = new HttpHeaders();
        const url = `${API.MANAGER.GET_USERS}?role=${role}${
            userstatus ? `&status=${userstatus}` : ``
        }`;

        return this.backend
            .get$<UserDetailsDtoInterface[]>(url, {
                headers,
            })
            .pipe(
                map((users: UserDetailsDtoInterface[]) =>
                    users.map(
                        ({
                            name,
                            second_name,
                            date_of_birth,
                            status,
                            login,
                        }: UserDetailsDtoInterface) => ({
                            name,
                            surname: second_name,
                            role: 'candidate',
                            status,
                            login,
                        })
                    )
                )
            );
    }

    public assignInterview(
        candidateLogin: string,
        profLogin: string,
        date: string
    ): void {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        const url = API.MANAGER.INTERVIEW;

        this.backend
            .post$(url, {
                body: {
                    candidate: candidateLogin,
                    staff_member: profLogin,
                    date,
                },
              headers,
            })
            .subscribe();
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
