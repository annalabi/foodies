import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-file-not-found',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet, ContactUsComponent],
  templateUrl: './file-not-found.component.html',
  styleUrl: './file-not-found.component.scss'
})
export class FileNotFoundComponent {

}
