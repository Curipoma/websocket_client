import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let headers = request.headers ? request.headers : new HttpHeaders();
    let params = request.params ? request.params : new HttpParams();
    const flag = request.headers
      .getAll('files')
      ?.some((header) => header === 'true');

    if (!flag) {
      headers = headers.append('Content-Type', 'application/json');
    }

    return next.handle(request.clone({headers, params}));
  }
}
