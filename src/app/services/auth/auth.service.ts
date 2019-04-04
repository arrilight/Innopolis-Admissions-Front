import { Injectable } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { BackendService } from '../backend/backend.service';
import { API } from '../../config/api.constants';
import { UserService } from '../user.service';
import { RegistrationDataInterface } from '../../interfaces/registration-data-interface';

@Injectable()
export class AuthService {
    constructor(
        private backend: BackendService,
        private userService: UserService
    ) {}

    public isAuthenticated(): boolean {
        const user = this.userService.getLocalUserInfo();
        return !!user;
    }

    public logout(): void {
        this.userService.removeLocalUserInfo();
    }

    public getToken(): string {
        return this.userService.getLocalUserInfo().token;
    }

    public login(
        login: string,
        password: string
    ): Observable<AuthResponseInterface> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend
            .post$<AuthResponseInterface>(API.LOGIN, {
                body: { login, password },
                headers,
            })
            .pipe(
                tap(response => {
                    this.userService.saveLocalUserInfo(
                        login,
                        response.role,
                        response.token
                    );
                })
            );
    }

    public register(
        data: RegistrationDataInterface
    ): Observable<AuthResponseInterface> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.backend.post$<any>(API.CANDIDATE.REGISTER, {
            body: data,
            headers,
        });
    }
}
