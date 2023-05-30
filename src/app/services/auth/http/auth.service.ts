import {Injectable} from "@angular/core";
import {IUserModel, UserModel} from "@models/auth";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private login = new BehaviorSubject<boolean>(this.isLoggedIn);
  public login$ = this.login.asObservable();

  get isLoggedIn(): boolean {
    return Boolean(JSON.parse(localStorage.getItem('_chat_is_logged_in_') ?? 'false'));
  }

  set isLoggedIn(value: boolean) {
    this.login.next(value);
    localStorage.setItem('_chat_is_logged_in_', String(value));
  }

  get token(): string | null {
    return localStorage.getItem('_chat_access_token_');
  }

  set token(value: string | undefined | null) {
    localStorage.setItem('_chat_access_token_', JSON.stringify(value));
  }

  get user(): IUserModel | null {
    return JSON.parse(localStorage.getItem('_chat_user_') ?? '{}') ?? new UserModel();
  }

  set user(value: IUserModel | undefined | null) {
    localStorage.setItem('_chat_user_', JSON.stringify(value));
  }
}
