import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-lista-inventario',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './lista-inventario.component.html',
  styleUrl: './lista-inventario.component.css'
})
export class ListaInventarioComponent implements OnInit {
  private inventoryService = inject(InventoryService);
  
  productos: any[] = [];
  cargando: boolean = true;

  ngOnInit() {
    this.cargarInventario();
  }

  cargarInventario() {
    this.inventoryService.getInventario().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar el inventario', err);
        this.cargando = false;
      }
    });
  }
}