// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Order } from './dashboard/order.model';
// import { AbstractService } from './abstract.service';
// import { Observable, of } from 'rxjs';
// import { FilterDTO } from './product.model';
// import { JsonResponse } from './app.model';
// import { environment } from 'src/environments/environmen';

// @Injectable({
//   providedIn: 'root',
// })
// export class OrderService extends AbstractService<Order> {
//   displayedColumns$: Observable<string[]> = of([
//     'username',
//     'productName',
//     'date',
//     'address',
//     'price',
//     'paymentMethod',
//     'onTime',
//   ]);
//   serviceName(): string {
//     return 'orders';
//   }
//   getTableData(filter: FilterDTO): Observable<Order[]> {
//     return this.httpClient.post<Order[]>(
//       `${environment.apiUrl}/orders/filter`,
//       filter
//     );
//   }
//   constructor(httpClient: HttpClient) {
//     super(httpClient);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order } from './dashboard/order.model';
import { FilterDTO } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  displayedColumns$: Observable<string[]> = of([
    'Username',
    'ProductName',
    'Date',
    'Address',
    'Price',
    'PaymentMethod',
    'OnTime',
  ]);

  constructor(private httpClient: HttpClient) {}

  getTableData(filter: FilterDTO): Observable<Order[]> {
    return this.httpClient.post<Order[]>('/api/orders/filter', filter);
  }
}
