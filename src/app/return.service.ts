import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterDTO } from './product.model';
import { Observable } from 'rxjs';
import { JsonResponse } from './app.model';
import { environment } from 'src/environments/environmen';

@Injectable({
  providedIn: 'root',
})
export class ReturnService {
  constructor(private HttpClient: HttpClient) {}
  getReturn(
    filter: FilterDTO & { username: string }
  ): Observable<JsonResponse> {
    return this.HttpClient.post<JsonResponse>(
      `${environment.apiUrl}/return/filter`,
      filter
    );
  }
}
