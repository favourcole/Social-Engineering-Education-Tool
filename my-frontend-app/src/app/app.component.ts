import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
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
  
  constructor(public authService: AuthService, private router: Router) {}
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}