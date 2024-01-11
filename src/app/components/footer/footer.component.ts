import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FAQsComponent } from './faqs/faqs.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FAQsComponent, HowItWorksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
