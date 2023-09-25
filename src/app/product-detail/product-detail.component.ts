import { Product } from './../product.model';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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
import {
  Observable,
  ObservedValueOf,
  Subject,
  Subscription,
  filter,
  pluck,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Order } from '../dashboard/order.model';
import { OrderService } from '../order.service';
import { FooterComponent } from '../footer/footer.component';

// import { SwiperContainer, SwiperSlide } from './swiper.component';
declare var Swiper: any;
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
export class ProductDetailComponent implements OnInit {
  min = 0;
  name = 'Lehenga';
  productId: number;
  productDetails: any;
  sizes = ['XL', 'L', 'M', 'XXL'];
  image = '';

  public swipeOptions = {
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}
  goToNextPage() {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productDetails = param;
      this.image = param['image'];
      this.detailForm.get('productId')?.setValue(param['id']);
    });
    // this.productId = 1;
    // this.productService.getProductDetails(this.productId).subscribe((data) => {

    // });
  }

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
    this.orderService.create(detail).subscribe((res) => alert(res.message));
  }
}
