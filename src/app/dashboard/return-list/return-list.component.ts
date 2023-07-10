import { ReturnService } from './../../return.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Order, Return } from '../order.model';
@Component({
  selector: 'app-return-list',
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
  templateUrl: './return-list.component.html',
  styles: [],
})
export class ReturnListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'username',
    'productName',
    'date',
    'address',
    'onTime',
  ];
  dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private returnService: ReturnService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // ngOnInit() {
  //   this.dataSource.data = this.ELEMENT_DATA;
  // }

  orderForm = new FormGroup({
    username: new FormControl<string>(''),
  });

  ELEMENT_DATA: Return[] = [
    {
      id: 1,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 2,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 3,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 4,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 5,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 6,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 7,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 8,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 9,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 10,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 11,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 12,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
    {
      id: 13,
      username: 'Sunita',
      productName: 'SARI',
      date: '2023/10/21',
      address: 'Pokhara',
      onTime: true,
    },
  ];
}
