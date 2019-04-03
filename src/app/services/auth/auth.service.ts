import { Injectable } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { BackendService } from '../backend/backend.service';
import { API } from '../../config/api.constants';

@Injectable()
export class AuthService {
    constructor(private backend: BackendService) {}

    // public authenticate(email: string, password: string): Observable<HttpResponse<any>> {
    //   // return this.backend.login(email, password).pipe(
    //   //   filter(token => !!token),
    //   //   tap(token => localStorage.setItem('currentUser', token['token']))
    //   // );
    // }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('currentUser');

        return !!token;
    }

    public logout(): void {
        localStorage.removeItem('currentUser');
    }

    public getToken(): string {
        return localStorage.getItem('currentUser');
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
            .pipe(tap(token => console.log(token)));
        // return this.http.post<HttpResponse<string>>(address, {
        //     email,
        //     password,
        // });
    }
}
