import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '../../../services/stores.model';
import { StoresService } from '../../../services/stores.service';

@Component({
  selector: 'app-we-feed-cities',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './we-feed-cities.component.html',
  styleUrl: './we-feed-cities.component.scss',
})
export class WeFeedCitiesComponent implements OnInit {
  storesService = inject(StoresService);
  selectedCity: string = 'All';
  stores: Store[] = [];

  ngOnInit() {}

  filterStores(city: String) {
    console.log(city);

    this.stores = this.stores.filter((store) => store.region === city);
    console.log(this.stores);
    return this.stores;
  }
}
