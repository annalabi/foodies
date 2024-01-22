import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodCategory, Store } from '../../services/stores.model';
import { StoresService } from '../../services/stores.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ScrollService } from '../../services/scroll.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownItems } from '../dropdown/dropdown.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { FoodCategoryToDisplayPipe } from '../../pipes/food-category-to-display.pipe';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [
    FoodCategoryToDisplayPipe,
    DropdownComponent,
    CommonModule,
    RouterOutlet,
    ProductsComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
})
export class StoresComponent implements OnInit {
  service = inject(StoresService);
  scrollService = inject(ScrollService);
  router: Router = inject(Router);

  @Input() stores!: Store[];
  // should not be changed
  initialStore: Store[] = this.stores;
  asianFilter = FoodCategory.ASIAN;
  donutFilter = FoodCategory.DONUTS;
  fastfoodFilter = FoodCategory.FAST_FOOD;
  souvlakiFilter = FoodCategory.SOUVLAKI;
  pizzaFilter = FoodCategory.PIZZA;
  coffeeFilter = FoodCategory.COFFEE;
  enabledCategoryFilters: FoodCategory[] = [];
  dropdownItems: DropdownItems[] = [
    { label: 'Sort by name', value: '01' },
    { label: 'Sort by rating', value: '02' },
    { label: 'Sort by popularity', value: '03' },
    { label: 'Sort by delivery time', value: '04' },
    { label: 'Sort by min consumption', value: '05' },
    { label: 'Sort by delivert cost', value: '06' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initialStore = this.stores;
    this.scrollService.startFromTop();
  }

  // theo
  nextPage(name: string) {
    name = name.replace(/\s/g, '');
    this.router.navigate(['./main', name]);
  }

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

  selectFilter(dropdownItem: DropdownItems): void {
    console.log(dropdownItem);
    // sort by name
    if (dropdownItem.value === '01') {
      this.sortByName();
      //  sort by rating
    } else if (dropdownItem.value === '02') {
      this.sortByRating();
      //  sort by popularity
    } else if (dropdownItem.value === '03') {
      this.sortByPopularity();
      // Sort by delivery time
    } else if (dropdownItem.value === '04') {
      this.sortByDeliveryTime();
    }
  }

  private sortByName() {
    this.stores.sort((a, b) => a.name.localeCompare(b.name));
  }

  private sortByRating() {
    this.stores.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  private sortByPopularity() {
    this.stores.sort((a, b) => {
      // First, compare by rating
      const ratingComparison = b.rating.rate - a.rating.rate;

      // If ratings are equal, compare by count
      return ratingComparison !== 0
        ? ratingComparison
        : b.rating.count - a.rating.count;
    });
  }

  private sortByDeliveryTime() {
    this.stores.sort((a, b) => a.deliveryTime.localeCompare(b.deliveryTime));
  }
}
