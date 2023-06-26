import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, NgFor, HeaderComponent, ProductsComponent],
})
export class HomeComponent {}
