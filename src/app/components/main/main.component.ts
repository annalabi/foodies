import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoresService } from '../../services/stores.service';
import { StoresComponent } from '../stores/stores.component';
import { Store } from '../../services/stores.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StoresComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  stores!: Store[];

  hasLoaded: boolean = false;

  service = inject(StoresService);

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
