import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environmen';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<JsonResponse>(`${environment.apiUrl}/login`, {
      username: username,
      password: password,
    });
  }
  signup(user: User) {
    return this.http.post<JsonResponse>(`${environment.apiUrl}/register`, user);
  }
}
export interface JsonResponse {
  status?: string;
  message: string;
  body: unknown;
  user?: User;
}
export interface User {
  username: string;
  password: string;
  email: string;
  phone: number;
  address?: string;
  createdTime?: string;
  enabled?: boolean;
  isAdmin: boolean;
}
