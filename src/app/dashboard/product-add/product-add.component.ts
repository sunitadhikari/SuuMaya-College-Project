import { Component } from '@angular/core';
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
export class ProductAddComponent {
  category$ = ['Sari', 'lehenga', 'kurtha', 'Gown'];
  categoryCtrl = new FormControl();
  sizes = ['MEDIUM', 'LARGE'];

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    detail: new FormControl(''),
    category: new FormControl(''),
    size: new FormControl(''),
    date: new FormControl(''),
  });
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private snackbar: CustomSnackbarService
  ) {}
  submit() {
    const productValue = this.productForm.value;
    const product: Product = {
      name: productValue.name ?? '',
      detail: productValue.name ?? '',
      price: productValue.name ?? '',
      category: productValue.name ?? '',
      size: productValue.name ?? '',
      date: productValue.date ?? '',
    };

    // this.productService.create(product).subscribe((res: any) => {
    //   if (this.snackbar) {
    //     this.snackbar.success('Product added successfully');
    //   }
    // });
  }
}
