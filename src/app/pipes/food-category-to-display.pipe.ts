import { Pipe, PipeTransform } from '@angular/core';
import { FoodCategory } from '../services/stores.model';

@Pipe({
  name: 'foodCategoryToDisplay',
  standalone: true,
})
export class FoodCategoryToDisplayPipe implements PipeTransform {
  transform(value: FoodCategory): string {
    // Convert enum value to lowercase and replace underscores with spaces
    return value
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/^\w/, (match) => match.toUpperCase());
  }
}
