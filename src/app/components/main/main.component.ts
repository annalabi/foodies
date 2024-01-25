import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoresService } from '../../services/stores.service';
import { StoresComponent } from '../stores/stores.component';
import { Region, Store } from '../../services/stores.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CityService } from '../../services/city.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StoresComponent, NavbarComponent,FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  cityService = inject(CityService);
  service = inject(StoresService);

  stores!: Store[];
  hasLoaded: boolean = false;
  selectedCity$: Observable<Region> = this.cityService.getSelectedCity();

  constructor() {}

  ngOnInit() {
    this.service
      .getData()

      .subscribe({
        next: (response) => {
          console.log(response);
          this.stores = response;
          this.hasLoaded = true;
        },
      });
      
  }
  
}
