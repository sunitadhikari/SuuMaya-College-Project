import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback, FilterDTO } from './product.model';
import { environment } from 'src/environments/environmen';
import { JsonResponse } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  create(feedback: Feedback) {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}feedback`,
      feedback
    );
  }
  feedbackList: Feedback[] = [];
  constructor(private http: HttpClient) {}
  getFeedbacks(filter: FilterDTO & { username: string | null }) {
    return this.http.post<JsonResponse>(
      `${environment.apiUrl}feedback/filter`,
      filter
    );
  }
  getFeedback(name: string) {
    let feedback: Feedback;
    this.feedbackList.map((val) => {
      if (val.name == name) feedback = val;
      return feedback;
    });
  }
  get() {
    return this.http.get<Feedback[]>(`${environment.apiUrl}feedback`);
  }
}
