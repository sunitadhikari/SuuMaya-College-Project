import { MatInputModule } from '@angular/material/input';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, RouterLink, RouterLinkWithHref } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Order } from '../order.model';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatFormFieldModule,
    RouterModule,
    RouterLink,
    RouterLinkWithHref,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './order-list.component.html',
  styles: [],
})
export class OrderListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'username',
    'productName',
    'date',
    'address',
    'paymentMethod',
    'price',
  ];
  dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private orderService: OrderService) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Order>(this.ELEMENT_DATA);
  }

  orderForm = new FormGroup({
    username: new FormControl<string>(''),
  });

  ELEMENT_DATA: Order[] = [
    {
      id: 1,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 2,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 3,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 4,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 5,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 6,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 7,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 8,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 9,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 10,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 11,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 12,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
    {
      id: 13,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      paymentMethod: 'esewa',
      price: 'Rs2080',
    },
  ];
}
