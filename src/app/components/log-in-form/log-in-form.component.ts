import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-log-in-form',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './log-in-form.component.html',
  styleUrl: './log-in-form.component.scss'
})
export class loginFormComponent {

}
