import { ReturnService } from './../../return.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Return } from '../order.model';
import { EMPTY, startWith, switchMap } from 'rxjs';
import { merge } from 'rxjs';
import { User } from 'src/app/auth.service';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'returnId',
    'boughtBy',
    'productName',
    'returnedDate',
    'onTime',
    'orderId',
  ];
  dataSource = new MatTableDataSource<Return>();
  isAdmin = (JSON.parse(localStorage.getItem('user') ?? '') as User).isAdmin;
  userNames = (JSON.parse(localStorage.getItem('user') ?? '') as User).username;
  totalElements = 0;
  pageSize = 10;
  pageIndex = 0;
  constructor(private returnService: ReturnService) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.updateReturn();
  }
  updateReturn(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          const username = localStorage.getItem('username');
          console.log(username);
          if (!this.userNames) return EMPTY;
          const filter = {
            pageNumber: this.paginator.pageIndex + 1,
            pageSize: this.paginator.pageSize,
            username: this.isAdmin ? null : this.userNames,
          };
          return this.returnService.getReturn(filter);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.dataSource.data = data.body as Return[];
        this.totalElements = data.totalElements;
      });
  }
}
