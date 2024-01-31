import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    this.ratingValue = parseFloat(event.target.value);
    this.sliderValue.emit(this.ratingValue);
  }
}
