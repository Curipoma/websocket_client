import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {AccessDeniedComponent} from "./access-denied/access-denied.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      roles: ['admin'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule {
}
