import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StoresComponent } from './stores/stores.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: 'main', component: MainComponent,
    children: [
        {path: "stores", component: StoresComponent} ,
        {path:"stores/:id", component: ProductsComponent},
    ]},
   
    {path: 'shoppingBasket', component: ShoppingBasketComponent},
    { path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: '**', component: FileNotFoundComponent}
];
