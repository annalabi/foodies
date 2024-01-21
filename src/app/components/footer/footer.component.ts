import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FAQsComponent } from './faqs/faqs.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
