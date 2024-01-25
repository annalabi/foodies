import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,

} from '@angular/core';
import { CardService } from '../../../card.service';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { FoodCategoryToDisplayPipe } from '../../../pipes/food-category-to-display.pipe';

@Component({
  selector: 'app-most-popular-choices',
  standalone: true,
  templateUrl: './most-popular-choices.component.html',
  styleUrl: './most-popular-choices.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FoodCategoryToDisplayPipe,
  ],
})
export class MostPopularChoicesComponent implements AfterViewInit {
  top10Stores: any[] = [];

  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef;
  @ViewChild('cardWrapper') cardWrapperRef!: ElementRef;
  cardsData: any;
  store: any;

  constructor(private cardService: CardService, private router: Router) {}
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
    let isHovered = false;

    function scrollContainer() {
      if (!isHovered) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
      }

      if (scrollAmount >= wrapper.offsetWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scrollContainer);
    }
    container.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    container.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    scrollContainer();
  }

  //  on click navigation to the product page
  nextPage(name: string) {
    name = name.replace(/\s/g, '');
    this.router.navigate(['./main', name]);
  }
}
