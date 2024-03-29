import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StoresComponent } from './components/stores/stores.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/footer/about-us/about-us.component';
import { SingUpFormComponent } from './components/sing-up-form/sing-up-form.component';
import { FAQsComponent } from './components/footer/faqs/faqs.component';
import { HowItWorksComponent } from './components/footer/how-it-works/how-it-works.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    // children: [
    //     {path: "stores", component: StoresComponent} ,
    //     {path:"stores/:id", component: ProductsComponent},
    // ]},
    { path: 'store/:location', component: StoresComponent},
    {path: 'main/:name', component: ProductsComponent},
    {path: 'aboutUs', component: AboutUsComponent},
    {path: 'signUp', component: SingUpFormComponent},
    {path: 'FAQs', component: FAQsComponent},
    {path: 'howItWorks', component: HowItWorksComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'shoppingBasket', component: ShoppingBasketComponent},
    { path: 'orderHistory', component: OrderHistoryComponent },
    { path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: '**', component: FileNotFoundComponent}
];
