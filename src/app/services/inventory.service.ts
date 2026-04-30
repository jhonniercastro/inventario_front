import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private http = inject(HttpClient);
  
  private apiUrl = 'https://localhost:7187/api/productos'; 


  getInventario(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/inventario`);
  }

  registrarMovimiento(movimiento: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/movimiento`, movimiento);
  }
}