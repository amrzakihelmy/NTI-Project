import { AuthService } from './../../../app/core/service/auth.service';
import { Component } from '@angular/core';
import { AuthImg } from '../../../shared/components/auth-img/auth-img';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [AuthImg,CommonModule,FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
 
  ) {}

  login() {

  const user = this.authService.login(this.email, this.password);

  if (user) {

    if (user.role === 'admin') {

      this.router.navigate(['/admin']);

    } else {

      this.router.navigate(['/home']);

    }

  } else {

    this.errorMessage = 'Invalid email or password';

  }

}
logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}
}