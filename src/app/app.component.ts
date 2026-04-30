import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ccl-inventario-front';
 
  public authService = inject(AuthService);
  private router = inject(Router);





  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}