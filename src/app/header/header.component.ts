import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    RouterLinkActive,
    RouterLinkWithHref,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HeaderComponent implements OnInit {
  // toggleMenu(): void {
  //   const menu = document.getElementById('menu');
  //   if (menu) {
  //     menu.classList.toggle('hidden');
  //   }
  // }

  searchValue = '';
  product: Product[] = [];
  searchForm = this.formBulider.group({
    searchValue: '',
  });
  constructor(
    private productService: ProductService,
    private formBulider: FormBuilder
  ) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    // this.productService
    //   .getProduct(searchValue : string):Observable<Product[]>{}
    //   .subscribe((product: Product[]) => {
    //     this.product = product || [];
    //   });
  }
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue || '';
    this.fetchData();
  }
}
