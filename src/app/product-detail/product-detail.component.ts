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
  ],
})
export class ProductDetailComponent implements OnInit {
  min = 0;
  name = 'Lehenga';
  productId: number;
  productDetails: any;
  sizes = ['XL', 'L', 'M', 'XXL'];

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
    private authService: AuthService,
    private fb: FormBuilder
  ) {}
  goToNextPage() {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.detailForm.get('productId')?.setValue(param['id']);
    });
  }

  products = [
    {
      image:
        'https://cdn.vibecity.in/providers/637e5b551c6e900011dc8e0e/Screenshot20230106181949Chrome_c2eaa746-e1ec-49e3-be43-8428490c52ad-3X.webp',
      name: 'lehenga',

      detail:
        'Renting wedding dresses has become a popular option for couples looking to save money or reduce waste. Renting allows you to wear a stunning wedding dress for your special day without the need to purchase it outright. Here is a description of renting wedding dresses: ',
      price: 2000,
    },
  ];
  detailForm = this.fb.nonNullable.group({
    quantity: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(4),
    ]),
    sizes: new FormControl('', Validators.required),
    productId: new FormControl(-1),
  });
  submit() {
    const detailValue = this.detailForm.value;
    const detail = {
      quantity: detailValue.quantity ?? '',
      size: detailValue.sizes ?? '',
    };
    // this.authService.detail(detail).subscribe((res)=>alert(res.message));
  }
}
