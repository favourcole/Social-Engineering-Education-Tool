import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Here, implement your logic to check username and password
    // For demo, let's just accept any non-empty strings
    this.isLoggedIn = username.trim().length > 0 && password.trim().length > 0;
    return this.isLoggedIn;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}