import { FilterDTO } from './../../product.model';
import { MatInputModule } from '@angular/material/input';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import {
  RouterModule,
  RouterLink,
  RouterLinkWithHref,
  Router,
} from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Order } from '../order.model';
import { OrderService } from 'src/app/order.service';
import { Observable, of, startWith, switchMap } from 'rxjs';
import { merge } from 'rxjs';

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
  displayedColumns$: Observable<string[]>;
  dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 10;
  totalOrders = 0;
  pageIndex = 0;

  constructor(private orderService: OrderService, private router: Router) {}
  ngAfterViewInit() {
    this.displayedColumns$ = merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        const filter: FilterDTO = {
          pageNumber: this.paginator.pageIndex + 1,
          pageSize: this.paginator.pageSize,
        };
        return this.orderService.getTableData(filter);
      })
    );
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.orderService.getTableData().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  displayColumns$: Observable<string[]> = of([
    'username',
    'productName',
    'date',
    'address',
    'price',
    'paymentMethod',
    'onTime',
  ]);
  updateOrders(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
  }
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.updateOrders();
  }
}
