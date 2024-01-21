import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent,FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  messageSent: boolean = false;

  sendMessage() {
    this.messageSent = true;
  }
}
