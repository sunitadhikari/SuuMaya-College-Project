import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  RouterLinkActive,
  RouterLink,
  RouterModule,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-sari',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterModule, NgFor],
  templateUrl: './sari.component.html',
  styles: [],
})
export class SariComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('http://localhost:3000/dashboard-products').subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  viewMore(productId: number) {
    debugger;
    this.router.navigate(['/products/detail', productId]);
    debugger;
  }
}
