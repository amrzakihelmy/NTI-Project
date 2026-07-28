import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nav} from './shared/components/nav/nav'
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,Login,Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('book-store');
}