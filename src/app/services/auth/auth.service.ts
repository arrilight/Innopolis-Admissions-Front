import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

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
}
