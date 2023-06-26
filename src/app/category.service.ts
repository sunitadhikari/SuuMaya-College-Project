import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  serviceName(): string {
    return 'categories';
  }

  constructor() {}
}
