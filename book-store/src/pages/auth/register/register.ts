import { AuthService } from './../../../app/core/service/auth.service';
import { Component } from '@angular/core';
import { AuthImg } from '../../../shared/components/auth-img/auth-img';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../../app/core/service/models/user.model';
@Component({
  selector: 'app-register',
  standalone:true,
  imports: [AuthImg,CommonModule,FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
newUser:User={
firstName:'',
  lastName:'',
  email :'',
  password :'',
  role:'customer'
  
}
  showPassword = false;
errorMessage = ''
  constructor(
    private authService: AuthService,
    private router: Router
 
  ) {}

  register() {

  const message = this.authService.register(this.newUser);

  if (message === 'Register Successfully') {

    this.router.navigate(['/login']);

  } else {

    this.errorMessage = message;

  }

}


togglePassword(): void {
  this.showPassword = !this.showPassword;
}
}