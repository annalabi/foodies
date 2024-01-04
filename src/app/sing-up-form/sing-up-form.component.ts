import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sing-up-form',
  standalone: true,
  imports: [NavbarComponent, RouterLink,RouterLinkActive, RouterOutlet],
  templateUrl: './sing-up-form.component.html',
  styleUrl: './sing-up-form.component.scss'
})
export class SingUpFormComponent {

}
