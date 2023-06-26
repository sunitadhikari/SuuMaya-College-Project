import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sari.component.html',
  styles: [],
})
export class SariComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

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
}
