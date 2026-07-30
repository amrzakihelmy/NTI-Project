import { ThemeService } from './../../core/service/theme.service';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Logo } from '../../shared/components/logo/logo';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Logo],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
currentTheme = 'light';
  constructor(
    private authService: AuthService,
    private router: Router,
    private themeService:ThemeService
  ) {}
ngOnInit() {

    this.currentTheme =
    localStorage.getItem('theme') || 'light';

}
  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  toggleTheme() {

    this.themeService.toggleTheme();
    this.currentTheme =this.currentTheme === 'light'
      ? 'dark'
      : 'light';

}
}