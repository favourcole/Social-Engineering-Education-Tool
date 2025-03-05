import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class UserComponent implements OnInit {
  username: string = '';
  submitted: boolean = false;
  userData: any = {};  // Initialize userData

  constructor() { }

  ngOnInit(): void {
  }

  submitUserForm() {
    this.submitted = true;
    // You can add additional logic here if needed
    // For example, saving the username to userData
    this.userData.name = this.username;
  }
}