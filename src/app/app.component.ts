import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { StoresComponent } from './stores/stores.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

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
            HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodies';
}
