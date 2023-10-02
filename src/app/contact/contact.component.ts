import { FeedbackService } from './../feedback.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { Feedback } from '../product.model';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FooterComponent,
  ],
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private feedbackService: FeedbackService) {}
  ngOnDestroy(): void {}
  ngOnInit(): void {}
  contactForm = new FormGroup({
    username: new FormControl(''),
    // email: new FormControl('', [
    //   Validators.pattern('\\w{2,20}@\\w{2,30}\\.\\w{2,10}'),
    // ]),
    message: new FormControl(''),
  });
  submit() {
    const contactFormValue = this.contactForm.value;
    const contactForm: Feedback = {
      username: contactFormValue.username ?? '',
      // email: contactFormValue.email ?? '',
      message: contactFormValue.message ?? '',
      // name: '',
    };
    this.feedbackService
      .create(contactForm)
      .subscribe((res) => alert(res.message));
  }
}
