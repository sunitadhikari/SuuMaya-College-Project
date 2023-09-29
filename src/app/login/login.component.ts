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
  Router,
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
  RouterModule,
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
    RouterModule,
    RouterLinkWithHref,
    HttpClientModule,
  ],
})
export class LoginComponent {
  showImage = false;
  constructor(private authService: AuthService, private router: Router) {}
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
    this.authService.login(user.username, user.password).subscribe((res) => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.user ?? ''));
      this.router.navigate(['/dashboard']);
    });
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }
}
