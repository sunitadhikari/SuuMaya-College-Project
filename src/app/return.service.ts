import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Return } from './dashboard/order.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ReturnService extends AbstractService<Return> {
  serviceName(): string {
    return 'Returns';
  }
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
