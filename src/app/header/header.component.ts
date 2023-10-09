import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterModule,
} from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable, map, tap } from 'rxjs';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../auth.service';

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
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    NgIf,
    RouterModule,
  ],
})
export class HeaderComponent implements OnInit {
  // toggleMenu(): void {
  //   const menu = document.getElementById('menu');
  //   if (menu) {
  //     menu.classList.toggle('hidden');
  //   }
  // }
  hideSidebar = false;
  disableClose: boolean;
  isHandSet$: Observable<boolean>;
  isNotHandSet$ = this.breakpointObserver.observe(['min-width:1100px']).pipe(
    tap(console.log),
    map((res) => res.matches)
  );
  categoryCtrl = new FormControl('');
  categories = ['Saree', 'Kurtha', 'lehenga', 'gown', 'cultural Dress'];
  searchValue = '';
  product: Product[] = [];
  searchForm = this.formBulider.group({
    searchValue: '',
  });
  constructor(
    private productService: ProductService,
    private formBulider: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {}
  @ViewChild('drawer') drawer!: MatSidenav;
  ngOnInit(): void {
    this.isHandSet$ = this.breakpointObserver
      .observe('(max-width: 1100px)')
      .pipe(
        tap(console.log),
        map((res) => res.matches)
      );

    this.isNotHandSet$ = this.breakpointObserver
      .observe('(min-width: 1100px)')
      .pipe(
        tap(console.log),
        map((res) => res.matches)
      );
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
  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.drawer.toggle();
  }
  drawerToggle(opened: boolean) {}
  // onSearchSubmit(): void {
  //   this.searchValue = this.searchForm.value.searchValue || '';
  //   this.fetchData();
  // }
  onItemClick(): void {
    if (this.isHandSet$) {
      this.drawer.close();
    }
  }
  submit() {
    this.productService.navigate(['/dashboard/order']);
  }
  userExistsInLocalStorage(): boolean {
    const userId = localStorage.getItem('user');
    return !!userId;
  }
}
