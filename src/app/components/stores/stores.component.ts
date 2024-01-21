import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodCategory, Store } from '../../services/stores.model';
import { StoresService } from '../../services/stores.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';

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
  ],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
})
export class StoresComponent implements OnInit {
  service = inject(StoresService);
  router: Router = inject(Router);

  @Input() stores!: Store[];
  // should not be changed
  initialStore: Store[] = this.stores;
  asianFilter = FoodCategory.ASIAN;
  donutFilter = FoodCategory.DONUTS;
  fastfoodFilter = FoodCategory.FAST_FOOD;
  enabledCategoryFilters: FoodCategory[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initialStore = this.stores;
  }

  // theo
  nextPage(name: string) {
    name = name.replace(/\s/g, '');
    this.router.navigate(['./main', name]);
  }

  changeFoodCategory(foodCategory: FoodCategory) {}

  updateEnabledFoodCategories(foodCategory: FoodCategory) {
    if (this.enabledCategoryFilters.includes(foodCategory)) {
      this.enabledCategoryFilters = this.enabledCategoryFilters.filter(
        (value) => value !== foodCategory
      );
    } else {
      // push category
      this.enabledCategoryFilters.push(foodCategory);
    }

    this.filterStoreByFoodCategory();
  }

  filterStoreByFoodCategory() {
    // initial state
    this.stores = this.initialStore;
    if (this.enabledCategoryFilters.length > 0) {
      this.stores = this.stores.filter((value) =>
        this.enabledCategoryFilters.includes(value.category)
      );
    }
  }

  isSelected(foodCategory: FoodCategory): boolean {
    return this.enabledCategoryFilters.includes(foodCategory);
  }
}
