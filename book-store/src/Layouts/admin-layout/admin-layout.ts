import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Logo],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {

  logout(event: Event) {
    event.preventDefault();
    // TODO: call auth service logout(), then redirect to /login
  }

  toggleTheme() {
    // TODO: reuse the same theme-toggle logic from your nav component
  }
}