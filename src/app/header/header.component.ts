import { Product } from './../product.model';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatIconModule, RouterLinkActive, RouterLinkWithHref],
})
export class HeaderComponent implements OnInit {
  // toggleMenu(): void {
  //   const menu = document.getElementById('menu');
  //   if (menu) {
  //     menu.classList.toggle('hidden');
  //   }
  // }

  // searchValue = '';
  // product: ProductInterface[] = [];
  // searchForm = this.formbuilder.nonNullable.group({
  //   searchValue: '',
  // });
  // constructor(
  //   private productService: ProductService,
  //   private formBulider: FormBuilder
  // ) {}
  ngOnInit(): void {
    // this.fetchData();
  }
  // fetchData(): void {
  //   this.productService.getProduct(searchValue).subscribe((product) => {
  //     this.product = product;
  //   });
  // }
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
