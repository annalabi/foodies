import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Region, Store } from '../../../services/stores.model';
import { StoresService } from '../../../services/stores.service';
import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-we-feed-cities',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './we-feed-cities.component.html',
  styleUrl: './we-feed-cities.component.scss',
})
export class WeFeedCitiesComponent implements OnInit {
  router: Router = inject(Router);
  storesService = inject(StoresService);
  cityService = inject(CityService);

  selectedCity: Region[] = [];
  stores: Store[] = [];

  athensFilter = Region.Athens;
  thessalonikiFilter = Region.Thessaloniki;
  kavalaFilter = Region.Kavala;
  ioanninaFilter = Region.Ioannina;
  patraFilter = Region.Patra;
  lamiaFilter = Region.Lamia;
  larissaFilter = Region.Larissa;
  chalkidaFilter = Region.Chalkida;
  serresFilter = Region.Serres;
  volosFilter = Region.Volos;
  rethymnoFilterr = Region.Rethymno;
  heraklionFilter = Region.Heraklion;

  ngOnInit() {}

  selectCity(selectedCity: Region) {
    this.cityService.setSelectedCity(selectedCity);
    this.router.navigate(['/', 'main']);
  }

}
