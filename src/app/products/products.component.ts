import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterModule, NgFor],
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent {
  products = [
    {
      name: 'Lehenga',
      price: 'Rs.2000',
      details: 'This is the details for Product 1',
      image:
        'https://e0.pxfuel.com/wallpapers/1/352/desktop-wallpaper-south-heroine-krithi-shetty-actress.jpg',
    },
    {
      name: 'Lehenga',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      name: 'Fishtail Lehenga',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://www.fabja.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/a/c/actress-kiara-advani-wedding-wear-white-lehenga-choli-fj102770.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://www.jiofab.com/media/catalog/product/cache/17b9859701dc227f0a66cf4f67484d0c/s/h/shanaya-kapoor-orange-lehenga-choli-jf4039810.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image: 'https://m.timesofindia.com/photo/87913120/87913120.jpg',
    },
    {
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
  ];
}
