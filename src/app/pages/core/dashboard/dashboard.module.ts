import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {ChatsComponent} from './chats/chats.component';
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ChatsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
