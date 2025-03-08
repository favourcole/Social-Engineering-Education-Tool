// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuard: Checking if authenticated...');
    console.log('Is authenticated?', this.authService.isAuthenticated());
    
    if (!this.authService.isAuthenticated()) {
      console.log('Not authenticated, redirecting to login');
      this.router.navigate(['/login']);
      return false;
    }
    console.log('Authenticated, allowing access');
    return true;
  }
}