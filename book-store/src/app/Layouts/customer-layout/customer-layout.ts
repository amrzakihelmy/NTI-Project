import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../../shared/components/nav/nav';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-customer-layout',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './customer-layout.html',
  styleUrl: './customer-layout.css',
})
export class CustomerLayout {

}