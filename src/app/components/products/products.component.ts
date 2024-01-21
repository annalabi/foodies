import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { Products } from '../../services/stores.model';
import { DataService } from '../../services/data.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  dataService: DataService = inject(DataService);
  products: Products[] = [];
  hasLoaded: boolean = false;
  router: Router = inject(Router)
  
  // category display
  category!: string; 
  first_time: boolean = true;

  not_fisrt_time(productCategory: string){
    this.first_time = false;
    this.category = productCategory;
  }

  categoryChanger(productCategory: string) {
    this.category = productCategory;
  }

  test(){
    console.log("hello")
  }

  addProduct(){
    
  }
  
  

  ngOnInit() {
    this.dataService.getProducts()
    .pipe(map((response: any) => response.products))
    .subscribe({
      next: response => {
        setTimeout(() => {
          console.log(response);
          this.products = response;
          this.hasLoaded = true;
        }, 500);
        
      }
    })
  }

}
