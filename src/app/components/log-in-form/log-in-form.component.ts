import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-log-in-form',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './log-in-form.component.html',
  styleUrl: './log-in-form.component.scss'
})
export class loginFormComponent implements OnInit{
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}
