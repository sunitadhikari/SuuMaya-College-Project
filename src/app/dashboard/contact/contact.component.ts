import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { Feedback } from 'src/app/product.model';
import { FeedbackService } from 'src/app/feedback.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../order.model';

// import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,

    // FooterComponent,
  ],
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(
    private feedbackService: FeedbackService,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {
    console.log(data);
  }
  ngOnDestroy(): void {}
  ngOnInit(): void {}
  contactForm = new FormGroup({
    username: new FormControl(''),
    // email: new FormControl('', [
    //   Validators.pattern('\\w{2,20}@\\w{2,30}\\.\\w{2,10}'),
    // ]),
    message: new FormControl(''),
  });
  element: ['message', 'order_id', 'date', 'name'];
  submit() {
    const contactFormValue = this.contactForm.value;
    const contactForm: Feedback = {
      userId: this.data.userId ?? 0,
      orderId: this.data.id ?? 0,
      // email: contactFormValue.email ?? '',
      message: contactFormValue.message ?? '',
      // name: '',
    };
    this.feedbackService
      .create(contactForm)
      .subscribe((res) => alert(res.message));
  }
}
