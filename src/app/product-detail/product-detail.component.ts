import { Product } from './../product.model';
import { MatIconModule } from '@angular/material/icon';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from '../header/header.component';
import { ProductService } from '../product.service';
import { SwiperModule } from 'swiper/angular';
import { Observable, map, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Order } from '../dashboard/order.model';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styles: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HeaderComponent,
    SwiperModule,
    FooterComponent,
  ],
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  min = 0;
  name = 'Lehenga';
  productId: number;
  productDetails$: Observable<Product>;
  sizes = ['XL', 'L', 'M', 'XXL'];
  image = '';

  // public swipeOptions = {
  //   spaceBetween: 0,
  //   loop: true,
  //   speed: 1000,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    // private productIdService: ProductIdService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  goToNextPage() {}

  ngOnInit() {}

  products: Product[] = [];
  detailForm = this.fb.nonNullable.group({
    quantity: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(3),
    ]),
    sizes: new FormControl('', Validators.required),
    productId: new FormControl(-1),
  });
  submit() {
    const detailValue = this.detailForm.value;
    const detail: Order = {
      quantity: detailValue.quantity ?? 0,
      size: detailValue.sizes ?? '',
    };
  }
  ngAfterViewInit(): void {
    this.productDetails$ = this.route.params.pipe(
      map((param) => param['id']),
      tap(console.log),
      switchMap((id) => {
        return this.productService.getProductById(id).pipe(
          map((JsonResponse) => {
            return JsonResponse.body as Product;
          })
        );
      })
    );
  }
  getProductId() {}
}
