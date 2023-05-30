import {Injectable} from "@angular/core";
import {AbstractHttpService, MessageService} from "@services/common";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {CoreService} from "@services/core";
import {IPaginatorModel, IServerResponse} from "@models/common";
import {Observable, tap} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ResponseHttpHandler} from "@exceptions";
import {AuthService} from "@services/auth";
import {IChat} from "@models/core/chat.model";

@Injectable({
  providedIn: 'root',
})
export class ChatsHttpService extends AbstractHttpService<IChat> {
  constructor(
    httpClient: HttpClient,
    coreService: CoreService,
    messageService: MessageService,
    private authService: AuthService,
  ) {
    super(
      httpClient,
      coreService,
      messageService,
      'core/chats'
    );
  }

  chatsPerUser(
    paginator: IPaginatorModel,
    params?: HttpParams,
    headers?: HttpHeaders,
  ): Observable<HttpResponse<IServerResponse<IChat[]>>> {
    this.coreService.showLoad();
    const url = `${this.API_DOMAIN}core/chat/user/${this.authService.user?.id}`;
    return this.httpClient
      .get<IServerResponse<IChat[]>>(
        url,
        {
          observe: 'response',
          params,
          headers,
        })
      .pipe(
        tap<HttpResponse<IServerResponse<IChat[]>>>({
          next: (response: HttpResponse<IServerResponse<IChat[]>>) => {
            this.pagination.next(response.body!.meta!);
          },
          error: (_) => {
            catchError(ResponseHttpHandler.render);
            this.coreService.hideLoad();
          },
        }),
        map((response: HttpResponse<IServerResponse<IChat[]>>) => {
          this.coreService.hideLoad();
          return response;
        }),
      );
  }
}
