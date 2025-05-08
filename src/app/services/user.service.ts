import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../types/user-response.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'http://localhost:8080/user';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    charset: 'utf-8',
    Authorization: `Bearer ${sessionStorage.getItem('auth-token')}`,
  });

  constructor(private httpClient: HttpClient) {}

  coletarUser(email: string) {
    return this.httpClient.post<UserResponse>(`${this.apiUrl}/${email}`, null, {
      headers: this.headers,
    });
  }
}
