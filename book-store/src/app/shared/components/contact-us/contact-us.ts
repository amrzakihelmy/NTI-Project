import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  bannerImage = '/contactus.png';
  email = '';
  message = '';
  lastName='';
  firstName='';
}
