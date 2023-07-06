import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './product.model';
import { environment } from 'src/environments/environmen';

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
export interface JsonResponse {
  message: string;
}
