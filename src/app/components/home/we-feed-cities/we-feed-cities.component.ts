import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-we-feed-cities',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,],
  templateUrl: './we-feed-cities.component.html',
  styleUrl: './we-feed-cities.component.scss',
})
export class WeFeedCitiesComponent {}
