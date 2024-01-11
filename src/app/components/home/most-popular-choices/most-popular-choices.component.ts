import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardService } from '../../../card.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-most-popular-choices',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './most-popular-choices.component.html',
  styleUrl: './most-popular-choices.component.scss',
})
export class MostPopularChoicesComponent implements AfterViewInit {
  top10Stores: any[] = [];

  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef;
  @ViewChild('cardWrapper') cardWrapperRef!: ElementRef;
  cardsData: any;

  constructor(private cardService: CardService) {}
  ngAfterViewInit() {
    this.cardService.getTop10Stores().subscribe({
      next: (data) => {
        console.log(data);
        this.cardsData = data;
        this.startScrolling();
      },
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
