import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-rating-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-slider.component.html',
  styleUrl: './rating-slider.component.scss',
})
export class RatingSliderComponent {
  @Input({ required: true }) ratingValue!: number;
  @Output() sliderValue: EventEmitter<number> = new EventEmitter<number>();

  onSliderChange(event: any) {
    this.ratingValue = event.target.value;
    this.sliderValue.emit(event.target.value);
  }

}
