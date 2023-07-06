import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { environment } from 'src/environments/environmen';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  create(productAdd: Product) {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}/products`,
      productAdd
    );
  }
  constructor(private http: HttpClient) {}
}
export interface JsonResponse {
  message: string;
}
