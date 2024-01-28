import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

import { MostPopularChoicesComponent } from './most-popular-choices/most-popular-choices.component';
import { WeFeedCitiesComponent } from './we-feed-cities/we-feed-cities.component';
import { OrderWithWeFeedComponent } from './order-with-we-feed/order-with-we-feed.component';
import { FooterComponent } from '../footer/footer.component';
import { CityService } from '../../services/city.service';
import { Region } from '../../services/stores.model';
import { CustomersCommentsComponent } from './customers-comments/customers-comments.component';
import { ScrollService } from '../../services/scroll.service';

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
    FooterComponent,
    CustomersCommentsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  cityService = inject(CityService);
  scrollService = inject(ScrollService);


  ngOnInit(): void {
    this.cityService.setSelectedCity(Region.All);
    this.scrollService.startFromTop();
    
  }
 
 
   
  
}

