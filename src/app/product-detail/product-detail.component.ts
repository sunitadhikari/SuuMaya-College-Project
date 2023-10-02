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
import { AppendS3Pipe } from '../append-s3.pipe';

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
    AppendS3Pipe,
  ],
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  isProductAvailable: boolean = true;
  min = 0;
  name = 'Lehenga';
  productId: number;
  productDetails$: Observable<Product>;
  size = ['s', 'M', 'l', 'xl', 'XXL'];
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
    available: new FormControl(),
    size: new FormControl('', Validators.required),
  });

  submit(transactionId: string) {
    const detailValue = this.detailForm.value;
    const detail: Order = {
      quantity: detailValue.quantity ?? 0,
      size: detailValue.size ?? '',
      // address:
      //   (JSON.parse(localStorage.getItem('user') ?? '') as User).address ?? '',
      userId: (JSON.parse(localStorage.getItem('user') ?? '') as User).id ?? 0,
      date: new Date().toISOString(),
      price: (detailValue.quantity ?? 0) * (this.product.price ?? 0),
      productId: this.product.id ?? 0,
      transactionId: transactionId,
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
    const that = this;
    let config = {
      // replace this key with yours
      publicKey: 'test_public_key_0275cc5e2bae42fb890536aae01e9e73',
      productIdentity: this.product.id,
      productName: this.product.name,
      productUrl: 'http://gameofthrones.com/buy/Dragons',
      eventHandler: {
        onSuccess(payload: any) {
          // hit merchant api for initiating verfication
          that.submit(payload['idx']);
          console.log('paylaod', payload);
        },
        // onError handler is optional
        onError(error: any) {
          // handle errors
          console.log('error', error);
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
    // minimum transaction amount must be 10, i.e 1000 inpaisa.
    const quantity = this.detailForm.get('quantity')?.value ?? 1;
    checkout.show({ amount: this.product.price * quantity * 100 });
  }
}
