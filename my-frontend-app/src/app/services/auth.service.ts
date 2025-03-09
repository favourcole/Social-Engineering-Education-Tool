// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  
  // Create BehaviorSubjects to track authentication state
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasStoredToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  
  // Track current user information
  private currentUserSubject = new BehaviorSubject<any>(this.getUserFromToken());
  public currentUser$ = this.currentUserSubject.asObservable();
  
  constructor(private http: HttpClient) { }
  
  // Mock login method for testing without backend
  login(username: string, password: string): Observable<boolean> {
    // Accept any non-empty credentials for testing
    if (username.trim() && password.trim()) {
      // Create a mock JWT token (this simulates what your backend would do)
      const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNjE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      
      // Store the token and update authentication state
      this.storeToken(mockToken);
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(this.getUserFromToken());
      
      return of(true);
    }
    return of(false);
  }
  
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }
  
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
  
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  
  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
  
  private hasStoredToken(): boolean {
    return !!this.getToken();
  }
  
  private getUserFromToken(): any {
    const token = this.getToken();
    if (!token) return null;
    
    try {
      // This would parse the JWT token to get user information
      // For the mock token, we'll just return a test user
      return { name: 'Test User', username: 'testuser' };
    } catch (e) {
      return null;
    }
  }
}