import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  top10Stores: any[] = [];

  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef;
  @ViewChild('cardWrapper') cardWrapperRef!: ElementRef;
  cardsData: any;

  constructor(private cardService: CardService) {}

  ngAfterViewInit() {
    this.cardService.getTop10Stores().subscribe((data) => {
      console.log(data);
      this.cardsData = data;
      this.startScrolling();
    });
  }

  startScrolling() {
    const container: HTMLElement = this.scrollContainerRef.nativeElement;
    const wrapper: HTMLElement = this.cardWrapperRef.nativeElement;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    function scrollContainer() {
      scrollAmount += scrollSpeed;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= wrapper.offsetWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scrollContainer);
    }

    scrollContainer();
  }
}
