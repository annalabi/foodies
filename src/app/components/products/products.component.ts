import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { Products } from '../../services/stores.model';
import { DataService } from '../../services/data.service';
import { ShoppingBasketComponent } from '../shopping-basket/shopping-basket.component';
import { PublisherService } from '../../services/publisher.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductCategoryToDisplayPipe } from '../../pipes/product-category-to-display';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ShoppingBasketComponent,
    RouterLink,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ProductCategoryToDisplayPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  dataService: DataService = inject(DataService);
  products: Products[] = [];
  image?: string;
  hasLoaded: boolean = false;
  activatedRoute = inject(ActivatedRoute);
  private storeId!: number;

  // category display
  category!: string;
  first_time: boolean = true;

  not_fisrt_time(productCategory: string) {
    this.first_time = false;
    this.category = productCategory;
  }

  categoryChanger(productCategory: string) {
    this.category = productCategory;
  }

  // for tests
  test() {
    console.log('hello');
  }
  constructor(private router: Router) {}
  // add product
  publisherService = inject(PublisherService);

  addProduct(product: Products) {
    const userDataString = sessionStorage.getItem('userData');
    if (!userDataString) {
      // User is not signed up, navigate to the sign-up form
      this.router.navigate(['/signUp']);
      return;
    }
    product.storeId = this.storeId;
    this.publisherService.publishData(product);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        let name = params.name;
        this.dataService
          .getStoreByName(name)
          .pipe(map((response: any) => response))
          .subscribe({
            next: (response) => {
              console.log(response);
              this.storeId = response.id;
              this.products = response.products;
              this.hasLoaded = true;
            },
          });
        this.dataService
          .getStoreByName(name)
          .pipe(map((response: any) => response.image))
          .subscribe({
            next: (response) => {
              console.log(response);
              this.image = response;
            },
          });
      },
    });
  }
}
