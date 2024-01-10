import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

import { MostPopularChoicesComponent } from './most-popular-choices/most-popular-choices.component';
import { WeFeedCitiesComponent } from './we-feed-cities/we-feed-cities.component';
import { OrderWithWeFeedComponent } from './order-with-we-feed/order-with-we-feed.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    RouterLink,
    RouterLinkActive,
    MostPopularChoicesComponent,
    WeFeedCitiesComponent,
    OrderWithWeFeedComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
