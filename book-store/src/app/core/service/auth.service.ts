import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [];

  constructor() {

    this.users = this.getUsers();

    if (this.users.length === 0) {

      this.users.push({
        firstName: 'Shimaa',
        lastName: 'Ahmed',
        email: 'shimaa@admin.com',
        password: 'Sh@12345',
        role: 'admin'
      });

      this.saveUsers();
    }
  }

  register(newUser: User) {

   
    newUser.role = 'customer';

    
    const existingUser = this.users.find(user => user.email.toLowerCase() === newUser.email.toLowerCase());

    if (existingUser) {
      return "Email already exists. Please enter another email.";
    }

    this.users.push(newUser);
    this.saveUsers();

    return "Register Successfully";
  }

  login(email: string, password: string) {

    const user = this.users.find(user =>
     user.email.toLowerCase() ===email.toLowerCase() &&
      user.password === password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }

    return null;
  }

  getUsers(): User[] {

    return JSON.parse(localStorage.getItem('users') || '[]');

  }

  saveUsers(): void {

    localStorage.setItem('users', JSON.stringify(this.users));

  }
logout(): void {

  localStorage.removeItem('currentUser');

}
isLoggedIn(): boolean {

  return localStorage.getItem('currentUser') !== null;

}
}