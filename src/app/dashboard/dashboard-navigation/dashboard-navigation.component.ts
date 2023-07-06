import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { map, tap } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

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
    NgIf,
  ],
  templateUrl: './dashboard-navigation.component.html',
  styles: [],
})
export class DashboardNavigationComponent {
  isNotHandSet$ = this.BreakpointObserver.observe(['(min-width:1100px)']).pipe(
    tap(console.log),
    map((res) => res.matches)
  );
  constructor(private BreakpointObserver: BreakpointObserver) {}
}