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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLinkWithHref } from '@angular/router';
// import { FilePickerModule } from 'ngx-awesome-uploader';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { S3Service } from 'src/app/s3.service';

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
    FilePickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  templateUrl: './product-add.component.html',
  styles: [],
})
export class ProductAddComponent implements OnInit, OnDestroy {
  selectedFile: File | null;
  productAddForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    size: new FormControl(''),
    details: new FormControl(''),
    date: new FormControl(''),
    category: new FormControl(''),
    available: new FormControl(false),
  });
  submit() {
    if (!this.selectedFile) {
      alert('please select one image');
      return;
    }
    const productValue = this.productAddForm.value;
    const product: Product = {
      name: productValue.name ?? '',
      price: productValue.price ?? 0,
      details: productValue.details ?? '',
      category: productValue.category ?? '',
      size: productValue.size ?? '',
      date: productValue.date ?? '',
      available: productValue.available ?? false,
      image: this.selectedFile.name,
    };
    this.s3Service.uploadFile(this.selectedFile, this.selectedFile.name);
    this.productService.create(product).subscribe((res) => alert(res.message));
  }
  ngOnDestroy(): void {}
  ngOnInit(): void {}
  constructor(
    private productService: ProductService,
    private s3Service: S3Service
  ) {}
  onFileUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files; // This gives you access to the selected file(s)    if (files && files.length > 0) {
    // You can now work with the selected file(s)
    this.selectedFile = files?.[0] ?? null;
  }
  // this.file = event.target.files[0];
}
