import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  RouterLink,
  RouterModule,
  RouterLinkActive,
  Route,
  Router,
} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { map, tap } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { User } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  templateUrl: './dashboard-navigation.component.html',
  styles: [],
})
export class DashboardNavigationComponent {
  isAdmin = (JSON.parse(localStorage.getItem('user') ?? '') as User).isAdmin;
  isNotHandSet$ = this.BreakpointObserver.observe(['(min-width:1100px)']).pipe(
    tap(console.log),
    map((res) => res.matches)
  );
  constructor(
    private BreakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  removeItem() {
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
}
