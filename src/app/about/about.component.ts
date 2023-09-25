import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styles: [],
  imports: [
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule,
    MatIconModule,
    FooterComponent,
  ],
})
export class AboutComponent {}
