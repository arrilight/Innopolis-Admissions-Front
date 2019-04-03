import { HttpHeaders } from '@angular/common/http';

export interface HttpOptions {
  headers?: HttpHeaders;
  body?: any;
  responseType?: any;
  withCredentials?: boolean;
  url?: string | null;
}
