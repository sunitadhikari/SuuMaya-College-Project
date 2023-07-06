import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatIconModule, RouterLinkActive, RouterLinkWithHref],
})
export class HeaderComponent {
  // toggleMenu(): void {
  //   const menu = document.getElementById('menu');
  //   if (menu) {
  //     menu.classList.toggle('hidden');
  //   }
  // }
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
