import {Injectable} from "@angular/core";
import {IEntityModel, IServerResponse} from "@models/common";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {HelperService} from "@shared/helpers";
import {catchError, map} from "rxjs/operators";
import {ResponseHttpHandler} from "@exceptions";
import {CoreService} from "@services/core";
import {MessageService} from "@services/common";
import {environment} from "@env/environment";
import {ILoginRequestModel, ILoginResponseModel, ILogoutResponseModel} from "@models/auth";
import {AuthService} from "@services/auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  API_DOMAIN: string = environment.API_URL;

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private coreService: CoreService,
    private messageService: MessageService,
  ) {
  }

  login(
    body: ILoginRequestModel,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<ILoginResponseModel>>> {
    this.coreService.showLoad();
    const url = `${this.API_DOMAIN}auth/login`;
    return this.httpClient
      .post<IServerResponse<ILoginResponseModel>>(
        url,
        body,
        {
          observe: 'response',
          headers: {
            ...HelperService.jsonOptions().getAll,
            ...headers,
          },
          params,
        })
      .pipe(
        tap<HttpResponse<IServerResponse<ILoginResponseModel>>>({
          next: (response: HttpResponse<IServerResponse<ILoginResponseModel>>) => {
            this.authService.user = response.body?.data;
            this.authService.token = response.body?.token;
            this.authService.isLoggedIn = true;
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<ILoginResponseModel>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }

  logout(
    body: IEntityModel,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<ILogoutResponseModel>>> {
    this.coreService.showLoad();
    const url = `${this.API_DOMAIN}auth/logout`;
    return this.httpClient
      .post<IServerResponse<ILogoutResponseModel>>(
        url,
        body,
        {
          observe: 'response',
          headers: {
            ...HelperService.jsonOptions().getAll,
            ...headers,
          },
          params,
        })
      .pipe(
        tap<HttpResponse<IServerResponse<ILogoutResponseModel>>>({
          next: (response: HttpResponse<IServerResponse<ILogoutResponseModel>>) => {
            localStorage.clear();
            this.authService.isLoggedIn = false;
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<ILogoutResponseModel>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }
}
