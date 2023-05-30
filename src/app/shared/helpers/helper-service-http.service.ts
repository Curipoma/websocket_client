import { HttpHeaders } from '@angular/common/http';

export class HelperService {
  static jsonOptions() {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });
  }
  static pdfOptions() {
    return new HttpHeaders({
      Accept: 'application/pdf',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });
  }
}
