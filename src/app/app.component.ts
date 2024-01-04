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
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
            MainComponent,
            NavbarComponent,
            ProductsComponent,
            StoresComponent,
            ShoppingBasketComponent,
            FileNotFoundComponent,
            FooterComponent,
            AboutUsComponent,
            HeaderComponent,
          SingUpFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'WeFeed';
}
