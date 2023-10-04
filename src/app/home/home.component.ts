import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './../footer/footer.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    MatSidenavModule,
    MatIconModule,
  ],
})
export class HomeComponent {}
