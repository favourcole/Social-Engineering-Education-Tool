import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  
  submitted = false;
  loading = false;
  loginError = false;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    const username = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    
    if (username && password) {
      this.loading = true;
      this.loginError = false;
      
      this.authService.login(username, password).subscribe({
        next: (success) => {
          this.loading = false;
          if (success) {
            console.log('Login successful!');
            this.router.navigate(['/user']);
          } else {
            this.loginError = true;
          }
        },
        error: () => {
          this.loading = false;
          this.loginError = true;
        }
      });
    }
  }
}