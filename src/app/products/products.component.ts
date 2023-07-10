import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductService } from '../product.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    RouterModule,
    MatPaginatorModule,
  ],
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  products = [
    {
      name: 'Lehenga',
      price: 'Rs.2000',
      size: 'Xl',
      details: 'This is the details for Product 1',
      image:
        'https://e0.pxfuel.com/wallpapers/1/352/desktop-wallpaper-south-heroine-krithi-shetty-actress.jpg',
    },
    {
      name: 'Lehenga',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      name: 'Fishtail Lehenga',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://www.fabja.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/a/c/actress-kiara-advani-wedding-wear-white-lehenga-choli-fj102770.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://www.jiofab.com/media/catalog/product/cache/17b9859701dc227f0a66cf4f67484d0c/s/h/shanaya-kapoor-orange-lehenga-choli-jf4039810.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Lehenga',
      price: 'Rs.2000',
      size: 'Xl',
      details: 'This is the details for Product 1',
      image:
        'https://e0.pxfuel.com/wallpapers/1/352/desktop-wallpaper-south-heroine-krithi-shetty-actress.jpg',
    },
    {
      name: 'Lehenga',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      name: 'Fishtail Lehenga',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://www.fabja.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/a/c/actress-kiara-advani-wedding-wear-white-lehenga-choli-fj102770.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://www.jiofab.com/media/catalog/product/cache/17b9859701dc227f0a66cf4f67484d0c/s/h/shanaya-kapoor-orange-lehenga-choli-jf4039810.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image: 'https://m.timesofindia.com/photo/87913120/87913120.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      size: 'xl',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
  ];
  paginatedProducts: any[] = [];
  pageSize = 10;
  totalProducts = 0;
  pageIndex = 0;
  constructor(private productService: ProductService) {}
  ngAfterViewInit() {
    // this.paginatedProducts.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.totalProducts = this.products.length;
    this.updateProducts();
  }

  updateProducts(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.updateProducts();
  }
}
