import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {BlankComponent} from './layout/blank/blank.component';
import {MainComponent} from './layout/main/main.component';
import {TopBarComponent} from './layout/top-bar/top-bar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";
import {BreadcrumbComponent} from './layout/breadcrumb/breadcrumb.component';
import {HttpInterceptorProviders} from "./interceptors";

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    MainComponent,
    TopBarComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    HttpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
