import {Injectable} from "@angular/core";
import {IPaginatorModel} from "@models/common";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private loaded = new BehaviorSubject<boolean>(false);
  public loaded$ = this.loaded.asObservable();

  get paginator(): IPaginatorModel {
    return {
      current_page: 1,
      from: 0,
      last_page: 0,
      per_page: 6,
      to: 0,
      total: 0,
    };
  }

  showLoad(): void {
    this.loaded.next(true);
  }

  hideLoad(): void {
    this.loaded.next(false);
  }
}
