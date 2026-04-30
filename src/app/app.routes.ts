import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaInventarioComponent } from './components/lista-inventario/lista-inventario.component';
import { MovimientoInventarioComponent } from './components/movimiento-inventario/movimiento-inventario.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'inventario', 
    component: ListaInventarioComponent, 
    canActivate: [authGuard]
  },
  { 
    path: 'movimientos', 
    component: MovimientoInventarioComponent, 
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/login' }
];