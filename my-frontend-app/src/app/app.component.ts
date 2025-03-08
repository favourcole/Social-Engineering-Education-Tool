import { Component } from '@angular/core';
import { Router, NavigationEnd, Event, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class AppComponent {
  title = 'angular-app';
  hideNavbar = false;
  
  constructor(public authService: AuthService, private router: Router) {
    // Subscribe to router events to detect when we're on the login or logout page
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Hide navbar on login and logout pages
      this.hideNavbar = event.urlAfterRedirects === '/login' || event.urlAfterRedirects === '/logout';
    });
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/logout']);
  }
}