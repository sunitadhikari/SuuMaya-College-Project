import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EMPTY } from 'rxjs';
import { merge } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Order } from '../order.model';
import { OrderService } from 'src/app/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  RouterModule,
  RouterLink,
  RouterLinkWithHref,
  Router,
} from '@angular/router';
import { User } from 'src/app/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
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
    MatButtonModule,
    MatDialogModule,
    ContactComponent,
  ],
  templateUrl: './order-list.component.html',
  styles: [],
})
export class OrderListComponent implements OnInit, AfterViewInit {
  isAdmin = (JSON.parse(localStorage.getItem('user') ?? '') as User).isAdmin;
  userNames = (JSON.parse(localStorage.getItem('user') ?? '') as User).username;
  displayedColumns: string[] = [
    'id',

    'date',
    'address',
    'product_id',
    'price',
    'boughtBy',
    'transaction_id',
    'review',
    'quantity',
    'size',
  ];

  dataSource = new MatTableDataSource<Order>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalElements = 0;
  constructor(
    private orderService: OrderService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.updateOrders();
  }
  updateOrders(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          console.log(this.userNames);
          if (!this.userNames) return EMPTY;
          const filter = {
            pageNumber: this.paginator.pageIndex + 1,
            pageSize: this.paginator.pageSize,
            username: this.isAdmin ? null : this.userNames,
          };
          return this.orderService.getOrders(filter);
        })
      )
      .subscribe((data) => {
        this.dataSource.data = data.body as Order[];
        this.totalElements = data.totalElements;
      });
  }

  @ViewChild('dialog') dialogRef: TemplateRef<Order>;
  openDialog(order: Order) {
    const dialogRef = this.dialog.open(ContactComponent, { data: order });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    order;
  }
}
