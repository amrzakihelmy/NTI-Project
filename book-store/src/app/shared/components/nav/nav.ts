import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [Logo, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}