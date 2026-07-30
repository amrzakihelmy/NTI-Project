import { ThemeService } from './../../../core/service/theme.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Logo } from '../logo/logo';
import { SearchService } from '../../../core/service/search.service';
import { CartService } from '../../../core/service/cart.service';
import {AuthService} from'../../../core/service/auth.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [Logo, RouterLink, FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
currentTheme = 'light';
  searchTerm = '';
isLogged=false;
  constructor(
    private searchService: SearchService,
    private cartService: CartService,
    private themeService:ThemeService,
    private authService:AuthService
  ) {}
ngOnInit() {

    this.currentTheme =
    localStorage.getItem('theme') || 'light'; 
   this.isLogged= this.authService.isLoggedIn();

}
  onSearch(): void {

    this.searchService.setSearchTerm(this.searchTerm);

  }

  getCartCount(): number {

    return this.cartService.getCartCount();

  }
toggleTheme() {

    this.themeService.toggleTheme();
    this.currentTheme =this.currentTheme === 'light'
      ? 'dark'
      : 'light';

}
logOut(){
    this.authService.logout();
}
}
