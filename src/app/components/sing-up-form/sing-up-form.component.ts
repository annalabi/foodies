import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sing-up-form',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterLink,RouterLinkActive, RouterOutlet,FooterComponent],
  templateUrl: './sing-up-form.component.html',
  styleUrl: './sing-up-form.component.scss'
})
export class SingUpFormComponent implements OnInit {
  messageSent: boolean = false;

  sendMessage() {
    this.messageSent = true;
  }
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}
