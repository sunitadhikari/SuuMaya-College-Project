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

  getOrders(filter: FilterDTO): Observable<Order[]> {
    return this.httpClient.post<Order[]>('/api/orders/filter', filter);
  }
  get() {
    return this.httpClient.get<Order[]>('http://loclhost:3000/orders');
  }
}
