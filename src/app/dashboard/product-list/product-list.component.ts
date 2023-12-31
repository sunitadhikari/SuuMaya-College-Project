import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {
  RouterLinkActive,
  RouterLink,
  RouterModule,
  Router,
} from '@angular/router';
import { Observable, map, merge, startWith, switchMap } from 'rxjs';
import { FilterDTO, Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { ImagePipe } from 'src/app/image.pipe';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppendS3Pipe } from 'src/app/append-s3.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgFor,
    MatPaginatorModule,
    HttpClientModule,
    ImagePipe,
    AppendS3Pipe,
  ],
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  products$: Observable<Product[]>;
  pageSize = 10;
  totalProducts = 0;
  pageIndex = 0;
  categoryCtrl = new FormControl('Saree');
  categories = ['Saree', 'Kurtha', 'Lehenga', 'Gown', 'Cultural Dress'];
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.products$ = merge(
      this.categoryCtrl.valueChanges,
      this.paginator.page
    ).pipe(
      startWith({}),
      switchMap(() => {
        const filter = {
          pageNumber: this.paginator.pageIndex + 1,
          pageSize: this.paginator.pageSize,
          category: this.categoryCtrl.value ?? '',
        };
        return this.productService.getProducts(filter).pipe(
          map((jsonResponse) => {
            this.totalProducts = jsonResponse.totalElements;
            return jsonResponse.body as Product[];
          })
        );
      })
    );
  }
  productList: Product[] = [];
  updateProducts(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.updateProducts();
  }
  edit(productId?: number) {
    if (productId) {
      this.router.navigate(['/dashboard/product/edit', productId]);
    }
  }
}
