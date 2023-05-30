import {Component, OnInit} from '@angular/core';
import {ChatsHttpService} from "@services/core/http/chats-http.service";
import {IPaginatorModel} from "@models/common";
import {CoreService} from "@services/core";

@Component({
  selector: 'app-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  paginator$ = this.chatsHttpService.paginator$;
  paginator: IPaginatorModel = this.coreService.paginator;

  constructor(
    private chatsHttpService: ChatsHttpService,
    private coreService: CoreService,
  ) {
    this.paginator$.subscribe((response) => {
      this.paginator = response;
    });
  }

  ngOnInit(): void {
    this.chatsHttpService.chatsPerUser(this.paginator).subscribe((response) => {
      console.log(response);
    });
  }
}
