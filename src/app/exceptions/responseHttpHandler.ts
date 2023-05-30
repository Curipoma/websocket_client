import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

export class ResponseHttpHandler {
  static render(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
