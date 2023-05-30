import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatListComponent} from "./chat-list/chat-list.component";
import {ChatsComponent} from "./chats.component";

const routes: Routes = [
  {
    path: '',
    component: ChatsComponent,
    children: [
      {
        path: 'chats',
        component: ChatListComponent,
      },
      {
        path: 'chats/:id',
        component: ChatListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule {
}
