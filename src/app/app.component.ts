import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { StoresComponent } from './components/stores/stores.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/footer/about-us/about-us.component';
import { SingUpFormComponent } from './components/sing-up-form/sing-up-form.component';
import { MostPopularChoicesComponent } from './components/home/most-popular-choices/most-popular-choices.component';
import { WeFeedCitiesComponent } from './components/home/we-feed-cities/we-feed-cities.component';
import { FAQsComponent } from './components/footer/faqs/faqs.component';
import { HowItWorksComponent } from './components/footer/how-it-works/how-it-works.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { initFlowbite } from 'flowbite';
import { CustomersCommentsComponent } from './components/home/customers-comments/customers-comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainComponent,
    NavbarComponent,
    ProductsComponent,
    StoresComponent,
    ShoppingBasketComponent,
    FileNotFoundComponent,
    FooterComponent,
    AboutUsComponent,
    SingUpFormComponent,
    MostPopularChoicesComponent,
    FAQsComponent,
    HowItWorksComponent,
    ContactUsComponent,
    WeFeedCitiesComponent,
    CustomersCommentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeFeed';

  ngOnInit(): void {
    initFlowbite();
  }
}
