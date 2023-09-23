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
  categories = ['Saree', 'Kurtha', 'lehenga', 'gown', 'cultural Dress'];
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
  onPageChange(event: PageEvent): void {}
  edit(productId?: number) {
    if (productId) {
      this.router.navigate(['/product/edit', productId]);
    }
  }
}
