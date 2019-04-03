import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpOptions } from './models/http-options.interface';

@Injectable()
export class BackendService {
  private static baseUrl = '/api';
  private headers = {};

  constructor(private http: HttpClient) {
  }

  public get$<T>(url: string, options?: HttpOptions): Observable<T> {
    options.headers = this.addToken(options.headers);

    return this.http.get<T>(url, options);
  }

  public post$<T>(url: string, options?: HttpOptions): Observable<T> {
    options.headers = this.addToken(options.headers);

    return this.http.post<T>(url, options.body, options);
  }

  public patch<T>(url: string, options?: HttpOptions): Observable<T> {
    options.headers = this.addToken(options.headers);

    return this.http.patch<T>(url, options.body, options);
  }

  public delete<T>(url: string, options?: HttpOptions): Observable<T> {
    options.headers = this.addToken(options.headers);

    return this.http.delete<T>(url, options);
  }

  protected addToken(headers: HttpHeaders): HttpHeaders {
    return headers.set('Authorization', 'token');
  }
}
