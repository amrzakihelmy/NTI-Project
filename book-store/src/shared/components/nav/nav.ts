import { Component } from '@angular/core';
import {Logo} from  '../logo/logo';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  imports: [Logo,RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
