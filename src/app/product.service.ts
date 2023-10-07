import { FilterDTO, Product } from 'src/app/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environmen';
import { JsonResponse } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  create(productAdd: Product) {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}products`,
      productAdd
    );
  }
  update(productUpdate: Product, id: number) {
    return this.http.put<JsonResponse>(
      `${environment.apiUrl}products/${id}`,
      productUpdate
    );
  }
  productList: Product[] = [];
  constructor(private http: HttpClient) {}
  getProducts(filter: FilterDTO & { category: string | null }) {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}products/filter`,
      filter
    );
  }
  getProduct(name: string) {
    let product: Product;
    this.productList.map((val) => {
      if (val.name == name) product = val;
      return product;
    });
  }
  get() {
    return this.http.get<Product[]>(`${environment.apiUrl}products`);
  }
  getProductById(productId: number) {
    return this.http.get<JsonResponse>(
      `${environment.apiUrl}products/${productId}`
      // productId
    );
  }
}
