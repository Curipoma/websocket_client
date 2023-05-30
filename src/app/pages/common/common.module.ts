import {NgModule} from '@angular/core';
import {CommonModule as NgCommonModule} from '@angular/common';

import {CommonRoutingModule} from './common-routing.module';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CommonComponent} from './common.component';


@NgModule({
  declarations: [
    AccessDeniedComponent,
    NotFoundComponent,
    CommonComponent
  ],
  imports: [
    NgCommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule {
}
