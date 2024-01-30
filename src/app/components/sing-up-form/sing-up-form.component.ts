import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-up-form',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FooterComponent,
  ],
  templateUrl: './sing-up-form.component.html',
  styleUrl: './sing-up-form.component.scss',
})
export class SingUpFormComponent implements OnInit {
  messageSent: boolean = false;
  fullName: string = '';

  constructor(private scrollService: ScrollService, private router: Router) {}

  sendMessage(): void {
    // Get form values
    this.fullName = (
      document.getElementById('full name') as HTMLInputElement
    ).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone') as HTMLInputElement).value;

    // Create an object to store user data
    const userData = {
      fullName: this.fullName,
      email,
      phone,
    };

    // Store data in session storage
    sessionStorage.setItem('userData', JSON.stringify(userData));
    console.log(
      'Session Storage after storing user data:',
      sessionStorage.getItem('userData')
    );

    this.messageSent = true;

    // Navigate to the stores page
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}
