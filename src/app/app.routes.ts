import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StoresComponent } from './components/stores/stores.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/footer/about-us/about-us.component';
import { SingUpFormComponent } from './components/sing-up-form/sing-up-form.component';
import { loginFormComponent } from './components/log-in-form/log-in-form.component';
import { FAQsComponent } from './components/footer/faqs/faqs.component';
import { HowItWorksComponent } from './components/footer/how-it-works/how-it-works.component';

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
    {path: 'FAQs', component: FAQsComponent},
    {path: 'howItWorks', component: HowItWorksComponent},
   
    {path: 'shoppingBasket', component: ShoppingBasketComponent},
    { path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: '**', component: FileNotFoundComponent}
];
