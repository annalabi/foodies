import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { StoresService } from '../services/stores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ProductsComponent],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss'
})
export class StoresComponent  {
  @Input()productdetails: any;
}
