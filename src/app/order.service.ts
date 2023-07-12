import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './dashboard/order.model';
import { AbstractService } from './abstract.service';
import { Observable, of } from 'rxjs';
import { FilterDTO } from './product.model';
import { JsonResponse } from './app.model';
import { environment } from 'src/environments/environmen';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends AbstractService<Order> {
  displayedColumns$: Observable<string[]> = of([
    'username',
    'productName',
    'date',
    'address',
    'price',
    'paymentMethod',
    'onTime',
  ]);
  serviceName(): string {
    return 'orders';
  }

  // getTableData(filter: FilterDTO): Observable<Order[]> {
  //   return this.httpClient.post<Order[]>(
  //     `${environment.apiUrl}/orders/filter`,
  //     filter
  //   );
  // }
  getTableData(filter: FilterDTO): Observable<Order[]> {
    return this.httpClient.post<Order[]>(
      `${environment.apiUrl}/orders/filter`,
      filter
    );
  }

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
