import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  // Adjust path if necessary
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';

// Define your routes here
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  // Ensure HomeComponent is imported
  { path: 'dashboard', component: DashboardComponent },  // Ensure DashboardComponent is imported
  { path: 'user', component: UserComponent }  // Ensure UserComponent is imported
];

@NgModule({
  declarations: [
    AppComponent,  // Include all components that belong to this module
    HomeComponent,  // Declare other components
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Set up the router for the application
  ],
  providers: [],
  bootstrap: [AppComponent]  // Set the root component
})
export class AppModule { }
