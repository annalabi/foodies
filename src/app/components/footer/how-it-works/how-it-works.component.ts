import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive,NavbarComponent,FooterComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

}
