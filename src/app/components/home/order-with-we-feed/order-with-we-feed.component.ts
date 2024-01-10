import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order-with-we-feed',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,],
  templateUrl: './order-with-we-feed.component.html',
  styleUrl: './order-with-we-feed.component.scss',
})
export class OrderWithWeFeedComponent {}
