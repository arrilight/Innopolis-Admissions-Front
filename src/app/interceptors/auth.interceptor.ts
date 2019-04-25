import {
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('thrtyhrh');
        if (this.authService.isAuthenticated()) {
            const authReq = req.clone({
                ...req.headers,
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.authService.getToken(),
                }),
            });

            return next.handle(authReq);
        }

        return next.handle(req);
    }
}
