import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7187/auth/login'; 

  login(credenciales: any) {
    return this.http.post<any>(this.apiUrl, credenciales).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('jwt_token', response.token);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }
}