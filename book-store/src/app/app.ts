import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Nav } from '../shared/components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Nav
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('book-store');
}