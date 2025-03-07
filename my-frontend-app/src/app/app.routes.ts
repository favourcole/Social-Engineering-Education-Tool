import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Default home route
  { path: '**', redirectTo: '' } // Redirects any unknown path to home
];