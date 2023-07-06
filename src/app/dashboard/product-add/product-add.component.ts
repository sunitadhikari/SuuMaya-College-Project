import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLinkWithHref } from '@angular/router';
// import { FilePickerModule } from 'ngx-awesome-uploader';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { Category, Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';
import { CategoryService } from 'src/app/category.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomSnackbarService } from 'src/app/custom.snackbar.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [
    CommonModule,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  templateUrl: './product-add.component.html',
  styles: [],
})
export class ProductAddComponent implements OnInit, OnDestroy {
  productAddForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    size: new FormControl(''),
    detail: new FormControl(''),
    date: new FormControl(''),
    category: new FormControl(''),
  });
  submit() {
    const productValue = this.productAddForm.value;
    const product: Product = {
      name: productValue.name ?? '',
      price: productValue.price ?? '',
      detail: productValue.detail ?? '',
      category: productValue.category ?? '',
      size: productValue.size ?? '',
      date: productValue.date ?? '',
    };
    this.productService.create(product).subscribe((res) => alert(res.message));
  }
  ngOnDestroy(): void {}
  ngOnInit(): void {}
  constructor(private productService: ProductService) {}
}
