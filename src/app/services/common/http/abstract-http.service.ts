import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {MessageService} from "@services/common";
import {CoreService} from "@services/core";
import {IEntityModel} from "@models/common";
import {HelperService} from "@shared/helpers";
import {catchError, map} from "rxjs/operators";
import {environment} from "@env/environment";
import {IPaginatorModel, IServerResponse} from '@models/common';
import {ResponseHttpHandler} from "@exceptions";

type EntityListResponseType<T> = T[];

@Injectable({
  providedIn: 'root',
})
export class AbstractHttpService<T extends IEntityModel> {
  API_DOMAIN: string = environment.API_URL;
  public pagination = new BehaviorSubject<IPaginatorModel>(
    this.coreService.paginator
  );
  public paginator$ = this.pagination.asObservable();

  constructor(
    public httpClient: HttpClient,
    public coreService: CoreService,
    public messageService: MessageService,
    @Inject(String) private resourceUrl: string,
  ) {
  }

  index(
    paginator: IPaginatorModel,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<EntityListResponseType<T>>>> {
    this.coreService.showLoad();
    const url = `${this.API_DOMAIN}${this.resourceUrl}`;
    return this.httpClient
      .get<IServerResponse<EntityListResponseType<T>>>(
        url,
        {
          observe: 'response',
          params,
          headers,
        })
      .pipe(
        tap<HttpResponse<IServerResponse<EntityListResponseType<T>>>>({
          next: (response: HttpResponse<IServerResponse<EntityListResponseType<T>>>) => {
            this.pagination.next(response.body!.meta!);
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<EntityListResponseType<T>>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }

  store(
    body: IEntityModel,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<T>>> {
    this.coreService.showLoad();
    return this.httpClient
      .post<IServerResponse<T>>(
        this.API_DOMAIN + this.resourceUrl,
        body,
        {
          observe: 'response',
          headers: {
            ...HelperService.jsonOptions(),
            ...headers,
          },
          params,
        })
      .pipe(
        tap<HttpResponse<IServerResponse<T>>>({
          next: (response: HttpResponse<IServerResponse<T>>) => {
            //
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<T>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }

  show(
    id: number,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<T>>> {
    this.coreService.showLoad();
    const url = `${this.API_DOMAIN}${this.resourceUrl}/${id}`;
    return this.httpClient
      .get<IServerResponse<T>>(
        url,
        {
          observe: 'response',
          headers: {
            ...HelperService.jsonOptions(),
            ...headers,
          },
        })
      .pipe(
        tap<HttpResponse<IServerResponse<T>>>({
          next: (response: HttpResponse<IServerResponse<T>>) => {
            //
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<T>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }

  update(
    id: number,
    body: IEntityModel,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<T>>> {
    this.coreService.showLoad();
    const url = `${this.API_DOMAIN}${this.resourceUrl}/${id}`;
    return this.httpClient
      .put<IServerResponse<T>>(
        url,
        body,
        {
          observe: 'response',
          headers: {
            ...HelperService.jsonOptions(),
            ...headers,
          },
        })
      .pipe(
        tap<HttpResponse<IServerResponse<T>>>({
          next: (response: HttpResponse<IServerResponse<T>>) => {
            //
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<T>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }

  destroy(
    id: number,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<T>>> {
    this.coreService.showLoad();
    const url = `${this.API_DOMAIN}${this.resourceUrl}/${id}`;
    return this.httpClient
      .delete<IServerResponse<T>>(
        url,
        {
          observe: 'response',
          headers: {
            ...HelperService.jsonOptions(),
            ...headers,
          },
        })
      .pipe(
        tap<HttpResponse<IServerResponse<T>>>({
          next: (response: HttpResponse<IServerResponse<T>>) => {
            //
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<T>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }
}
