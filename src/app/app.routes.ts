import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StoresComponent } from './components/stores/stores.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';
import { loginFormComponent } from './log-in-form/log-in-form.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    // children: [
    //     {path: "stores", component: StoresComponent} ,
    //     {path:"stores/:id", component: ProductsComponent},
    // ]},
    {path: 'stores', component: StoresComponent},
    {path: 'stores/:id', component: ProductsComponent},
    {path: 'aboutUs', component: AboutUsComponent},
    {path: 'signUp', component: SingUpFormComponent},
    {path: 'login', component: loginFormComponent},
   
    {path: 'shoppingBasket', component: ShoppingBasketComponent},
    { path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: '**', component: FileNotFoundComponent}
];
