import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @ViewChild('firstnameInput') firstnameInput!: ElementRef;
  @ViewChild('lastnameInput') lastnameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(private router: Router) {}

  onSubmit(): void {
    const firstname = this.firstnameInput.nativeElement.value;
    const lastname = this.lastnameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    
    // Add your registration logic here
    console.log('Registration data:', { firstname, lastname, email, password });
    
    // Redirect to login after registration
    this.router.navigate(['/login']);
  }
}