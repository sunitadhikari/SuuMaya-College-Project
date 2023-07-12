import { HttpClientModule } from '@angular/common/http';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductService } from '../product.service';
import { PageEvent } from '@angular/material/paginator';
import { FilterDTO, Product } from '../product.model';
import { Observable, map, merge, startWith, switchMap } from 'rxjs';
import { ImagePipe } from '../image.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    RouterModule,
    MatPaginatorModule,
    HttpClientModule,
    ImagePipe,
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
  constructor(private productService: ProductService, private router: Router) {}
  ngAfterViewInit() {
    this.products$ = merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        const filter: FilterDTO = {
          pageNumber: this.paginator.pageIndex + 1,
          pageSize: this.paginator.pageSize,
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
