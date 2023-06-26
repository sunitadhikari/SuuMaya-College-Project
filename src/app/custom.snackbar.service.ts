import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CustomSnackbarService {
  config: MatSnackBarConfig = {
    duration: 1000,
    verticalPosition: 'bottom',
  };
  error(message: string, action?: string) {
    this.snackbar.open(message, action, {
      ...this.config,
      panelClass: ['bg-red-600'],
    });
  }

  warn(message: string, action?: string) {
    this.snackbar.open(message, action, {
      ...this.config,
      duration: 1500,
      panelClass: ['bg-yellow-600', 'text-black'],
    });
  }

  success(message: string, action?: string) {
    this.snackbar.open(message, action, {
      ...this.config,
      panelClass: ['bg-green-600'],
    });
  }
  constructor(private snackbar: MatSnackBar) {}
}
