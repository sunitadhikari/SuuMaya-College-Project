import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MatIconModule, RouterModule, ReactiveFormsModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'last';
}
