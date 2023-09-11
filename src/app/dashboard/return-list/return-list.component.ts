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
    RouterModule,
    RouterLink,
    RouterLinkWithHref,
  ],
  templateUrl: './return-list.component.html',
  styles: [],
})
export class ReturnListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  products: MatTableDataSource<Return>;
  displayedColumns: string[] = [
    'id',
    'username',
    'productName',
    'date',
    'address',
    'onTime',
  ];

  totalProducts = 100;
  pageSize = 10;
  pageIndex = 0;
  constructor(private returnService: ReturnService) {}
  ngOnInit(): void {
    this.products = new MatTableDataSource<Return>(this.getProducts());
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }
  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
  private getProducts(): Return[] {
    return [
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
}
