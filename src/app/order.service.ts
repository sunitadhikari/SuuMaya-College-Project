import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FilterDTO } from './product.model';
import { environment } from 'src/environments/environmen';
import { JsonResponse } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}
  getOrders(
    filter: FilterDTO & { username: string }
  ): Observable<JsonResponse> {
    return this.httpClient.post<JsonResponse>(
      `${environment.apiUrl}/orders/filter`,
      filter
    );
  }
}
