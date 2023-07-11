import { Product } from './../product.model';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    // SwiperContainer,
    // SwiperSlide,
  ],
})
export class ProductDetailComponent implements OnInit {
  name = 'Lehenga';
  productId: number;
  productDetails: any;

  // @ViewChild('homeSlide', { static: true }) public homeSlide: SwiperContainer;
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
    private route: ActivatedRoute
  ) {}
  goToNextPage() {
    // this.homeSlide.swiper.slideNext();
  }
  //
  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.productId = +params['id'];
    //   // Fetch the product details based on the productId and assign it to productDetails
    //   this.productDetails = this.getProductDetails(this.productId);
    // });
  }
  // getProductDetails(productId: number) {
  //   return this.products.find((product) => product.id === productId);
  // }

  products = [
    {
      image:
        'https://cdn.vibecity.in/providers/637e5b551c6e900011dc8e0e/Screenshot20230106181949Chrome_c2eaa746-e1ec-49e3-be43-8428490c52ad-3X.webp',
      name: 'lehenga',
      detail:
        'Renting wedding dresses has become a popular option for couples looking to save money or reduce waste. Renting allows you to wear a stunning wedding dress for your special day without the need to purchase it outright. Here is a description of renting wedding dresses: ',
      size: 'Xl',
      price: 'Rs 2000',
    },
    // {
    //   image:
    //     'https://cdn.vibecity.in/providers/637e5b551c6e900011dc8e0e/1000227107_d02b136f-1482-49aa-aaba-933ac95e523b.webp',
    // },
  ];
}
