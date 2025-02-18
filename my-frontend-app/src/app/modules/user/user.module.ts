// In src/app/modules/user/user.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../components/user/user.component'; // Adjust if necessary
import { UserRoutingModule } from './user-routing.module'; // Ensures routing is set up

@NgModule({
  declarations: [
    UserComponent // Declare UserComponent here
  ],
  imports: [
    CommonModule,
    UserRoutingModule // Connect the routes by importing UserRoutingModule
  ]
})
export class UserModule { }
