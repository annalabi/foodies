import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StoresComponent } from './components/stores/stores.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    // children: [
    //     {path: "stores", component: StoresComponent} ,
    //     {path:"stores/:id", component: ProductsComponent},
    // ]},
    {path: 'stores', component: StoresComponent},
    {path: 'stores/:id', component: ProductsComponent},

   
    {path: 'shoppingBasket', component: ShoppingBasketComponent},
    { path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: '**', component: FileNotFoundComponent}
];
