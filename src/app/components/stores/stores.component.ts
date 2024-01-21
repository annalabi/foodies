import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '../../services/stores.model';
import { StoresService } from '../../services/stores.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductsComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
})
export class StoresComponent {
  service = inject(StoresService);
  router: Router = inject(Router);

  @Input() stores!: Store[];

  constructor() {}


  // theo
  nextPage(name: string){
    name = name.replace(/\s/g, "")
    this.router.navigate(["./main", name])
  }
}
