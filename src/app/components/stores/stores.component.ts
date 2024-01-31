import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodCategory, Region, Store } from '../../services/stores.model';
import { StoresService } from '../../services/stores.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ScrollService } from '../../services/scroll.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItems } from './dropdown/dropdown.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { FoodCategoryToDisplayPipe } from '../../pipes/food-category-to-display.pipe';
import { CityService } from '../../services/city.service';
import { RatingSliderComponent } from './rating-slider/rating-slider.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-stores',
  standalone: true,
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
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
    RatingSliderComponent,
    FormsModule,

  ],
})
export class StoresComponent implements OnInit {
  cityService = inject(CityService);
  service = inject(StoresService);
  scrollService = inject(ScrollService);
  router: Router = inject(Router);
   // New property for search term
   searchInput: string = '';

  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef;
  @ViewChild('cardWrapper') cardWrapperRef!: ElementRef;

  @Input() stores!: Store[];
  @Input() storesByCity!: Store[];
  @Input() region!: Region;
  // should not be changed
  initialStore: Store[] = this.stores;
  initialFamousStore: Store[] = this.stores;
  testCityValue$ = this.cityService.getSelectedCity();

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
  rethymnoFilter = Region.Rethymno;
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
  currentDropdownItem: DropdownItems | undefined;

  // Filter By Rating
  ratingValue: number = 0;

  storesCounter: number = 0;

  constructor() {}

  ngOnInit(): void {
    // keep initial state
    this.initialStore = this.stores;
    this.initialFamousStore = this.stores;
    this.stores = this.filterStoresByRegion(this.region, this.stores);
    this.storesByCity = this.filterStoresByRegion(
      this.region,
      this.storesByCity
    );
    this.scrollService.startFromTop();
    this.storesCounter = this.stores.length;
  }
  
  // Function to handle search by store name
  searchStoresByName(): void {
  
    let filteredStores = this.initialStore;
    
    this.stores = filteredStores.filter((store) =>
      store.name.toLowerCase().includes(this.searchInput.toLowerCase())
    );
    console.log('searching...')

    this.storesCounter = this.stores.length;
    
  }
  updateSearchInput(event: Event): void {
    if (event && event.target) {
      const inputElement = event.target as HTMLInputElement;
      this.searchInput = inputElement.value;
    }
  }

  // Food category filters
  updateEnabledFoodCategories(foodCategory: FoodCategory) {
    if (this.enabledCategoryFilters.includes(foodCategory)) {
      this.enabledCategoryFilters = this.enabledCategoryFilters.filter(
        (value) => value !== foodCategory
      );
    } else {
      this.enabledCategoryFilters.push(foodCategory);
    }
    this.filterStoreByFoodCategory();
  }

  filterStoreByFoodCategory() {
    this.ratingValue = 0;
    this.stores = this.initialStore;
    this.stores = this.filterStoresByRegion(this.region, this.stores);
    if (this.currentDropdownItem) {
      this.stores = this.selectFilter(this.currentDropdownItem, this.stores);
    }
    if (this.enabledCategoryFilters.length > 0) {
      this.stores = this.stores.filter((value) =>
        this.enabledCategoryFilters.includes(value.category)
      );
    }

    this.storesCounter = this.stores.length;
    
  }

  isSelected(foodCategory: FoodCategory): boolean {
    return this.enabledCategoryFilters.includes(foodCategory);
  }

  // Cities filter
  isSelectedCity(region: Region): boolean {
    return this.region === region;
  }

  updateEnabledCities(region: Region) {
    this.cityService.setSelectedCity(region);
    this.filterStoreByCity(region);
  }

  filterStoreByCity(region: Region) {
    this.ratingValue = 0;
    this.stores = this.initialStore;
    this.enabledCategoryFilters = [];
    this.stores = this.filterStoresByRegion(region, this.stores);
    this.storesCounter = this.stores.length;
  }

  // Most famous by category of each city
  // famousByCity(region: Region){
  //   // Apply other filters before rating filter
  //   let filteredStores = this.initialFamousStore;

  //   // Apply region filter
  //   filteredStores = this.filterStoresByRegion(region, filteredStores);

  //   if (this.enabledCategoryFilters.length > 0) {
  //     filteredStores = filteredStores.filter((value) =>
  //       this.enabledCategoryFilters.includes(value.category)
  //     );
  //   }

  //   // Sort by popularity
  //   return this.storesByCity = this.sortByPopularity(filteredStores);

  // }

  // private filterFamousStoresByRegion(region: Region, storesByCity: StoreByCity[]): StoreByCity[] {
  //   if (region === Region.All) {
  //     return storesByCity;
  //   }
  //   return storesByCity.filter((storesByCity) => storesByCity.region === region);
  // }

  // private sortByCityPopularity(storesByCity: StoreByCity[]): StoreByCity[] {
  //   return storesByCity.sort((a, b) => {
  //     // First, compare by rating
  //     const ratingComparison = b.rating.rate - a.rating.rate;

  //     // If ratings are equal, compare by count
  //     return ratingComparison !== 0
  //       ? ratingComparison
  //       : b.rating.count - a.rating.count;
  //   });
  // }

  // City functions combination
  // cityFunctions(region: Region, store: Store){
  //   this.updateEnabledCities(region);
  //   this.sortByPopularity(store);
  // }

  // filter by rating
  filterByRating(rating: number): void {
    this.ratingValue = rating;

    // Apply other filters before rating filter
    let filteredStores = this.initialStore;

    // Apply region filter
    filteredStores = this.filterStoresByRegion(this.region, filteredStores);

    // Apply food category filters
    if (this.enabledCategoryFilters.length > 0) {
      filteredStores = filteredStores.filter((store) =>
        this.enabledCategoryFilters.includes(store.category)
      );
    }

    // Apply city filter
    filteredStores = this.filterStoresByRegion(this.region, filteredStores);

    // Apply dropdown filter
    if (this.currentDropdownItem) {
      filteredStores = this.selectFilter(
        this.currentDropdownItem,
        filteredStores
      );
    }

    // Apply rating filter
    this.stores = filteredStores.filter((store) => store.rating.rate >= rating);
    this.storesCounter = this.stores.length;
  }

  // dropdown filters
  selectFilter(dropdownItem: DropdownItems, stores: Store[]): Store[] {
    this.currentDropdownItem = dropdownItem;
    // sort by name
    if (this.currentDropdownItem.value === '01') {
      stores = this.sortByName(stores);
      //  sort by rating
    } else if (this.currentDropdownItem.value === '02') {
      stores = this.sortByRating(stores);
      //  sort by popularity
    } else if (this.currentDropdownItem.value === '03') {
      stores = this.sortByPopularity(stores);
      // Sort by delivery time
    } else if (this.currentDropdownItem.value === '04') {
      stores = this.sortByDeliveryTime(stores);
      //  Sort by min consumption
    } else if (this.currentDropdownItem.value === '05') {
      stores = this.sortByMinConsumption(stores);
      // Sort by delivery cost
    } else if (this.currentDropdownItem.value === '06') {
      stores = this.sortByDeliveryCost(stores);
    }
    return stores;
  }

  private sortByName(stores: Store[]): Store[] {
    return stores.sort((a, b) => a.name.localeCompare(b.name));
  }

  private sortByRating(stores: Store[]): Store[] {
    return stores.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  private sortByPopularity(stores: Store[]): Store[] {
    return stores.sort((a, b) => {
      // First, compare by rating
      const ratingComparison = b.rating.rate - a.rating.rate;

      // If ratings are equal, compare by count
      return ratingComparison !== 0
        ? ratingComparison
        : b.rating.count - a.rating.count;
    });
  }

  private sortByDeliveryTime(stores: Store[]): Store[] {
    return stores.sort((a, b) => a.deliveryTime - b.deliveryTime);
  }

  private sortByMinConsumption(stores: Store[]): Store[] {
    return stores.sort((a, b) => a.minConsumption - b.minConsumption);
  }

  private sortByDeliveryCost(stores: Store[]): Store[] {
    return stores.sort((a, b) => a.deliveryCost - b.deliveryCost);
  }

  private filterStoresByRegion(region: Region, stores: Store[]): Store[] {
    if (region === Region.All) {
      return stores;
    }
    return stores.filter((store) => store.region === region);
    // return region === Region.All ? stores :  stores.filter((store) => store.region === region);
  }



  // theo
  nextPage(name: string) {
    name = name.replace(/\s/g, '');
    this.router.navigate(['./main', name]);
  }
}
