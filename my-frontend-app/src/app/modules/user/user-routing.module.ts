// In src/app/modules/user/user-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
