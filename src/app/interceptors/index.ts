import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './auth/authentication.interceptor';
import { TokenInterceptor } from './auth/token.interceptor';
import { CoreInterceptor } from './core/core.interceptor';
import { ErrorInterceptor } from './common/error.interceptor';

/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
