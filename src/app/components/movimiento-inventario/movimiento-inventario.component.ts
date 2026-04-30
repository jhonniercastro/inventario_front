import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-movimiento-inventario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './movimiento-inventario.component.html',
  styleUrl: './movimiento-inventario.component.css'
})
export class MovimientoInventarioComponent implements OnInit {
  private fb = inject(FormBuilder);
  private inventoryService = inject(InventoryService);
  private router = inject(Router);

  productos: any[] = [];

  movimientoForm = this.fb.group({
    ProductoId: ['', Validators.required],
    Tipo: ['entrada', Validators.required],
    Cantidad: ['', [Validators.required, Validators.min(1)]]
  });

  ngOnInit() {
    this.cargarList();
  }

  onSubmit() {
    if (this.movimientoForm.valid) {
      const payload = {
        ...this.movimientoForm.value,
        ProductoId: Number(this.movimientoForm.value.ProductoId)
      };

      this.inventoryService.registrarMovimiento(payload).subscribe({
        next: () => {
          alert('Movimiento registrado exitosamente.');
          this.movimientoForm.reset();
          this.productos = [];
          this.cargarList();
        },
        error: (err) => {
          console.error('Error al registrar el movimiento', err);
          alert(err.error?.mensaje || 'Error al registrar el movimiento. Por favor, inténtalo de nuevo.');
        }
      });
    } else {
      this.movimientoForm.markAllAsTouched();
    }
  }

  cargarList() {
    this.inventoryService.getInventario().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de productos para el select', err);
      }
    });
  }


}