import { HttpClientModule } from '@angular/common/http';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductService } from '../product.service';
import { PageEvent } from '@angular/material/paginator';
import { FilterDTO, Product } from '../product.model';
import { Observable, map, merge, startWith, switchMap } from 'rxjs';
import { ImagePipe } from '../image.pipe';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatPaginatorModule,
    HttpClientModule,
    ImagePipe,
    NgFor,
  ],
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  products$: Observable<Product[]>;
  pageSize = 10;
  totalProducts = 0;
  pageIndex = 0;
  categoryCtrl = new FormControl(null);
  categories = ['Saree', 'Kurtha', 'lehenga', 'gown', 'cultural Dress'];
  constructor(private productService: ProductService, private router: Router) {}
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
          map((jsonReponse) => {
            this.totalProducts = jsonReponse.totalElements;
            return jsonReponse.body as Product[];
          })
        );
      })
    );
  }
  productList: Product[] = [];
  ngOnInit(): void {}

  updateProducts(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.updateProducts();
  }
  viewMore(productId?: number) {
    if (productId) {
      this.router.navigate(['/products/detail', productId]);
    }
  }
}
