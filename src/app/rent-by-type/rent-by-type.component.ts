import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import {
  RouterLinkActive,
  RouterLink,
  RouterModule,
  Router,
} from '@angular/router';
import { ImagePipe } from '../image.pipe';
import { Observable, merge, startWith, switchMap, map } from 'rxjs';
import { Product, FilterDTO } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-rent-by-type',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterLinkActive,
    RouterLink,
    RouterModule,
    MatPaginatorModule,
    HttpClientModule,
    ImagePipe,
  ],
  templateUrl: './rent-by-type.component.html',
  styles: [],
})
export class RentByTypeComponent implements OnInit, AfterViewInit {
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
