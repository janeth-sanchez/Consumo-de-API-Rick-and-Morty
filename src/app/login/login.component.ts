import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}  
  onLoginSubmit(username: string, password: string) {
    if (username && password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor ingrese un usuario y contraseña válidos');
    }
  }
}