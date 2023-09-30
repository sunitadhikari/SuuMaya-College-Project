import { OrderService } from 'src/app/order.service';
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
import KhaltiCheckout from 'khalti-checkout-web';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from '../header/header.component';
import { ProductService } from '../product.service';
import { SwiperModule } from 'swiper/angular';
import { Observable, map, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService, User } from '../auth.service';
import { Order } from '../dashboard/order.model';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private http: HttpClient
  ) {}
  goToNextPage() {}
  ngOnInit() {}
  product: Product;
  detailForm = this.fb.nonNullable.group({
    quantity: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(3),
    ]),
    sizes: new FormControl('', Validators.required),
  });

  submit() {
    const detailValue = this.detailForm.value;
    const detail: Order = {
      quantity: detailValue.quantity ?? 0,
      size: detailValue.sizes ?? '',
      userId: (JSON.parse(localStorage.getItem('user') ?? '') as User).id ?? 0,
      date: new Date().toISOString(),
      price: detailValue.quantity ?? 0 * this.product.price ?? 0,
      productId: this.product.id ?? 0,
    };
    this.orderService.create(detail).subscribe((res) => alert(res.message));
  }
  ngAfterViewInit(): void {
    this.productDetails$ = this.route.params.pipe(
      map((param) => param['id']),
      tap(console.log),
      switchMap((id) => {
        return this.productService.getProductById(id).pipe(
          map((JsonResponse) => {
            const product = JsonResponse.body as Product;
            this.product = product;
            return product;
          })
        );
      })
    );
  }
  getProductId() {}
  makePayment() {
    let config = {
      // replace this key with yours
      publicKey: 'test_public_key_0275cc5e2bae42fb890536aae01e9e73',
      productIdentity: '1234567890',
      productName: 'Drogon',
      productUrl: 'http://gameofthrones.com/buy/Dragons',
      eventHandler: {
        onSuccess(payload: any) {
          // hit merchant api for initiating verfication
          console.log(payload);
          debugger;
        },
        // onError handler is optional
        onError(error: any) {
          // handle errors
          console.log(error);
        },
        onClose() {
          console.log('widget is closing');
        },
      },
      paymentPreference: [
        'KHALTI',
        'EBANKING',
        'MOBILE_BANKING',
        'CONNECT_IPS',
        'SCT',
      ],
    };

    let checkout = new KhaltiCheckout(config);
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
  }
}
