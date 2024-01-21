import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sing-up-form',
  standalone: true,
  imports: [NavbarComponent, RouterLink,RouterLinkActive, RouterOutlet,FooterComponent],
  templateUrl: './sing-up-form.component.html',
  styleUrl: './sing-up-form.component.scss'
})
export class SingUpFormComponent {

}
