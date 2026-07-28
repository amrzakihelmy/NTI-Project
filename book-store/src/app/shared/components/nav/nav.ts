import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Logo } from '../logo/logo';
import { SearchService } from '../../../core/service/search.service';
import { CartService } from '../../../core/service/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [Logo, RouterLink, FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  searchTerm = '';

  constructor(
    private searchService: SearchService,
    private cartService: CartService
  ) {}

  onSearch(): void {

    this.searchService.setSearchTerm(this.searchTerm);

  }

  getCartCount(): number {

    return this.cartService.getCartCount();

  }

}
