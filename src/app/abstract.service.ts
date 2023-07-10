import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './dashboard/order.model';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractService<Order> {
  constructor(protected httpClient: HttpClient) {}
}
