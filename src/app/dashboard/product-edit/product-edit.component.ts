import { MatIconModule } from '@angular/material/icon';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLinkWithHref,
    MatAutocompleteModule,
    AsyncPipe,
    FormsModule,
    MatFormFieldModule,
    NgFor,
    FilePickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  templateUrl: './product-edit.component.html',
  styles: [],
})
export class ProductEditComponent implements OnInit, OnDestroy {
  productEditForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    size: new FormControl(''),
    detail: new FormControl(''),
    date: new FormControl(''),
    category: new FormControl(''),
    available: new FormControl(true),
  });
  constructor(private productService: ProductService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  submit() {
    const productValue = this.productEditForm.value;
    const product: Product = {
      name: productValue.name ?? '',
      price: productValue.price ?? 0,
      detail: productValue.detail ?? '',
      category: productValue.category ?? '',
      size: productValue.size ?? '',
      date: productValue.date ?? '',
      available: productValue.available ?? true,
    };
  }
}
