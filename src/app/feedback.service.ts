import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './product.model';
import { environment } from 'src/environments/environmen';
import { JsonResponse } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  create(feedback: Feedback) {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}/feedback`,
      feedback
    );
  }
  constructor(private http: HttpClient) {}
}
