import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['/inventario']);
        },
        error: (err) => {
          console.error('Error de autenticación', err);
          alert('Credenciales incorrectas. Intenta de nuevo.');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}