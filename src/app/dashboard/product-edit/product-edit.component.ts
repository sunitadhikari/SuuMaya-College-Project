import { JsonResponse } from './../../auth.service';
import { MatIconModule } from '@angular/material/icon';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { Observable, map, switchMap, tap } from 'rxjs';
import { ImagePipe } from 'src/app/image.pipe';
import { S3Service } from 'src/app/s3.service';

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
    ImagePipe,
  ],
  templateUrl: './product-edit.component.html',
  styles: [],
})
export class ProductEditComponent implements OnInit, OnDestroy, AfterViewInit {
  productId: number;
  selectedFile: File | null = null;
  // image = '';
  // sizeks = [''];
  productEdit$: Observable<Product>;
  product: Product;
  productEditForm = this.fb.nonNullable.group({
    name: new FormControl(''),
    price: new FormControl(0),
    // size: new FormControl(''),
    details: new FormControl(''),
    date: new FormControl(''),
    category: new FormControl(''),
    available: new FormControl(true),
  });

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private s3Service: S3Service
  ) {}
  ngOnInit(): void {}

  ngOnDestroy(): void {}

  getProductId() {}
  submit() {
    let img = this.product.image;
    if (this.selectedFile) {
      img = this.selectedFile.name;
      this.s3Service.uploadFile(this.selectedFile, this.selectedFile.name);
    }
    const productValue = this.productEditForm.value;
    const productF: Product = {
      name: productValue.name ?? '',
      price: productValue.price ?? 0,
      details: productValue.details ?? '',
      category: productValue.category ?? '',
      // size: productValue.size ?? '',
      date: productValue.date ?? '',
      available: productValue.available ?? true,
      image: img,
    };
    // this.s3Service.uploadFile(this.selectedFile);
    this.productService
      .update(productF, this.product.id ?? -1)
      .subscribe((res) => {
        alert(res.message);
        this.productEditForm.reset();
        this.selectedFile = null;
      });
  }
  ngAfterViewInit(): void {
    this.productEdit$ = this.route.params.pipe(
      map((param) => param['id']),
      tap(console.log),
      switchMap((id) => {
        return this.productService.getProductById(id).pipe(
          map((JsonResponse) => {
            const product = JsonResponse.body as Product;
            this.product = product;
            this.productEditForm.patchValue(product);
            return product;
          })
        );
      })
    );
  }
  onFileUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files; // This gives you access to the selected file(s)    if (files && files.length > 0) {
    // You can now work with the selected file(s)
    this.selectedFile = files?.[0] ?? null;
  }
}
