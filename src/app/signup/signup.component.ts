import { User } from './../auth.service';
import { MatInputModule } from '@angular/material/input';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  RouterLinkActive,
  RouterLinkWithHref,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    RouterLinkWithHref,
    MatInputModule,
  ],
})
export class SignupComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  newUserForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [
      Validators.pattern('\\w{2,20}@\\w{2,30}\\.\\w{2,10}'),
    ]),
    phone: new FormControl(0, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    address: new FormControl(''),
    password: new FormControl(''),
    accepted: new FormControl('false'),
  });
  submit() {
    const signupValue = this.newUserForm.value; // const le variable baanuchha
    const userSignup: User = {
      username: signupValue.username ?? '',
      email: signupValue.email ?? '',
      phone: signupValue.phone ?? 0,
      address: signupValue.address ?? '',
      password: signupValue.password ?? '',
      enabled: false,
      isAdmin: false,
    };
    this.authService.signup(userSignup).subscribe((res) => alert(res.message));
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
