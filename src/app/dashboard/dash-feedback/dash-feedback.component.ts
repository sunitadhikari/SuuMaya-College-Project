import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Feedback, FilterDTO } from 'src/app/product.model';
import { FeedbackService } from 'src/app/feedback.service';
import { EMPTY, merge } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { User } from 'src/app/auth.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dash-feedback',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './dash-feedback.component.html',
  styleUrls: [],
})
export class DashFeedbackComponent implements OnInit, AfterViewInit {
  isAdmin = (JSON.parse(localStorage.getItem('user') || '{}') as User).isAdmin;
  userNames = (JSON.parse(localStorage.getItem('user') || '{}') as User)
    .username;

  contactForm = new FormGroup({
    name: new FormControl(''),
    message: new FormControl(''),
  });

  displayedColumns: string[] = ['id', 'name', 'message', 'date'];
  dataSource = new MatTableDataSource<Feedback>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalElements = 0;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateFeedback();
  }

  updateFeedback(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          if (!this.userNames) return EMPTY;
          const filter: FilterDTO & { username: string | null } = {
            pageNumber: this.paginator.pageIndex + 1,
            pageSize: this.paginator.pageSize,
            username: this.isAdmin ? null : this.userNames,
          };
          return this.feedbackService.getFeedbacks(filter);
        })
      )
      .subscribe((data) => {
        this.dataSource.data = data.body as Feedback[];
        this.totalElements = data.totalElements;
      });
  }
}
