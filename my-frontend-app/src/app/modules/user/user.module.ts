// In src/app/modules/user/user.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../components/user/user.component';
import { UserRoutingModule } from './user-routing.module'; // Ensures routing is set up
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserComponent, DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule // Connect the routes by importing UserRoutingModule
  ]
})
export class UserModule { }
