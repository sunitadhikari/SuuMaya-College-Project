import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {
  RouterLinkActive,
  RouterLink,
  RouterModule,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-kurtha',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterModule, NgFor],
  templateUrl: './kurtha.component.html',
  styles: [],
})
export class KurthaComponent {
  constructor(private router: Router) {}
  products = [
    {
      id: 1,
      name: 'lehenga',
      price: 'Rs.2000',
      details: 'This is the details for Product 1',
      image:
        'https://e0.pxfuel.com/wallpapers/1/352/desktop-wallpaper-south-heroine-krithi-shetty-actress.jpg',
    },
    {
      id: 2,
      name: 'Lehenga',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      id: 3,
      name: 'Fishtail Lehenga',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://img.etimg.com/thumb/width-1200,height-900,imgsize-175588,resizemode-75,msid-95718065/top-trending-products/lifestyle/find-the-best-lehenga-choli-under-3000-in-india.jpg',
    },
    {
      id: 4,
      name: 'Sari',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://e0.pxfuel.com/wallpapers/1/352/desktop-wallpaper-south-heroine-krithi-shetty-actress.jpg',
    },
    {
      id: 5,
      name: 'Kurtha',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://stylesatlife.com/wp-content/uploads/2021/05/Jhanvi-Kapoor.jpg',
    },
    {
      id: 6,
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://www.fabja.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/a/c/actress-kiara-advani-wedding-wear-white-lehenga-choli-fj102770.jpg',
    },
    {
      id: 7,
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      id: 8,
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://www.jiofab.com/media/catalog/product/cache/17b9859701dc227f0a66cf4f67484d0c/s/h/shanaya-kapoor-orange-lehenga-choli-jf4039810.jpg',
    },
    {
      id: 9,
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      id: 10,
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
    {
      id: 11,
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image: 'https://m.timesofindia.com/photo/87913120/87913120.jpg',
    },
    {
      id: 12,
      name: 'Gown',
      price: 'Rs.2000',
      details: 'This is the details for Product 2',
      image:
        'https://southindianactress.in/wp-content/uploads/2021/11/shivani-rajashekar-8.jpg',
    },
  ];
  viewMore(productId: number) {
    debugger;
    this.router.navigate(['/products/detail', productId]);
    debugger;
  }
}
