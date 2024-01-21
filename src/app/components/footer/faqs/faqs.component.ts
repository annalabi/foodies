import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive,NavbarComponent,FooterComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FAQsComponent {

}
