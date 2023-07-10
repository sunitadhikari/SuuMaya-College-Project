import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './dashboard/order.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends AbstractService<Order> {
  serviceName(): string {
    return 'orders';
  }
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  // public override filterData(filter: filterDTO, headers?:httpsHeader);
}
