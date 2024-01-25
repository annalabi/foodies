import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodCategory, Region, Store } from '../../services/stores.model';
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
import { CityService } from '../../services/city.service';
import { Observable } from 'rxjs';

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
  @Input() region!: Region;
  // should not be changed
  initialStore: Store[] = this.stores;

  // Food Category Filters
  asianFilter = FoodCategory.ASIAN;
  donutFilter = FoodCategory.DONUTS;
  fastfoodFilter = FoodCategory.FAST_FOOD;
  souvlakiFilter = FoodCategory.SOUVLAKI;
  pizzaFilter = FoodCategory.PIZZA;
  coffeeFilter = FoodCategory.COFFEE;
  sweetsFilter = FoodCategory.SWEETS;
  italianFilter = FoodCategory.ITALIAN;
  veganFilter = FoodCategory.VEGAN;
  lebaneseFilter = FoodCategory.LEBANESE;
  seafoodFilter = FoodCategory.SEAFOOD;
  saladsFilter = FoodCategory.SALADS;
  coctailsFilter = FoodCategory.COCKTAILS;
  enabledCategoryFilters: FoodCategory[] = [];

  // City Filters
  chosenCity: Region[] = [];

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

  // Dropdown Filters
  dropdownItems: DropdownItems[] = [
    { label: 'Sort by name', value: '01' },
    { label: 'Sort by rating', value: '02' },
    { label: 'Sort by popularity', value: '03' },
    { label: 'Sort by delivery time', value: '04' },
    { label: 'Sort by min consumption', value: '05' },
    { label: 'Sort by delivery cost', value: '06' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initialStore = this.stores;
    this.stores = this.filterStoresByRegion(this.region, this.stores);
    this.scrollService.startFromTop();

    // this.cityService = this.cityService.selectedCity;
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
      //  Sort by min consumption
    } else if (dropdownItem.value === '05') {
      this.sortByMinConsumption();
      // Sort by delivery cost
    } else if (dropdownItem.value === '06') {
      this.sortByDeliveryCost();
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

  private filterStoresByRegion(region: Region, stores: Store[]): Store[] {
    if (region === Region.All) {
      return stores;
    }
    return stores.filter((store) => store.region === region);
    // return region === Region.All ? stores :  stores.filter((store) => store.region === region);
  }

  private sortByDeliveryTime() {
    this.stores.sort((a, b) => a.deliveryTime - b.deliveryTime);
  }

  private sortByMinConsumption() {
    this.stores.sort((a, b) => a.minConsumption - b.minConsumption);
  }

  private sortByDeliveryCost() {
    this.stores.sort((a, b) => a.deliveryCost - b.deliveryCost);
  }
}
