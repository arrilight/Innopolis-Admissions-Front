import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserProfileInterface} from '../interfaces/user-profile-interface';
import {RegistrationDataInterface} from '../interfaces/registration-data-interface';

@Injectable()
export class BackendService {
  private static baseUrl = '/api';
  private headers = {};

  constructor(private http: HttpClient) {
  }

  public login(address: string, email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<string>>(address, {email, password});
  }

  public getProfileInfo(address: string, login: string): Observable<UserProfileInterface> {
    const info = {
      name: 'John',
      surname: 'Doe',
      role: 'candidate',
      photo:
        'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcsPuSpazhAhWPuIsKHdPzDS8QjRx6BAgBEAU&url=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Fprofile&psig=AOvVaw1ncLWfBOD0JHiOtYkwCvRs&ust=1554118616819258',
      status: 'Application received',
      progress: 40,
    };
    return of(info);
    // return this.http.get<UserProfileInterface>(address, {});
  }

  public register(address: string, regData: RegistrationDataInterface): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<string>>(address, {...regData});
  }

  public updateStatus(address: string, login: string, status: string): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<string>>(address, {login, status});
  }
}
