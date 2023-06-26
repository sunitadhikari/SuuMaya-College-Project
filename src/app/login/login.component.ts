import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    RouterLink,
    RouterLinkWithHref,
    HttpClientModule,
  ],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submit() {
    const loginValue = this.userForm.value;
    const user = {
      username: loginValue.username ?? '',
      password: loginValue.password ?? '',
    };

    this.authService
      .login(user.username, user.password)
      .subscribe((res) => alert(res.status));
  }
}
