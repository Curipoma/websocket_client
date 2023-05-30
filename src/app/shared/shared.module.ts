import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageDirective} from "@shared/directive/error-message.directive";

@NgModule({
  declarations: [
    ErrorMessageDirective,
  ],
  exports: [
    ErrorMessageDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
