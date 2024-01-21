import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ScrollService } from '../../../services/scroll.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,NavbarComponent,FooterComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FAQsComponent implements OnInit {
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}
