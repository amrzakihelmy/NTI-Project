import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../shared/components/logo/logo';
import { ThemeService } from '../../core/service/theme.service';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Logo],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  currentTheme = 'light';
  constructor(private themeService: ThemeService) {}
ngOnInit() {

    this.currentTheme = this.themeService.loadTheme();
   
   

}
  logout(event: Event) {
    event.preventDefault();
    // TODO: call auth service logout(), then redirect to /login
  }

toggleTheme() {

    this.themeService.toggleTheme();
    this.currentTheme =this.currentTheme === 'light'
      ? 'dark'
      : 'light';

}
}