import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../footer.component';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}
