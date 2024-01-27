import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from '../services/stores.model';

@Pipe({
  name: 'productCategoryToDisplay',
  standalone: true,
})
export class ProductCategoryToDisplayPipe implements PipeTransform {
  transform(value: ProductCategory): string {
    // Convert enum value to lowercase and replace underscores with spaces
    return value
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/^\w/, (match) => match.toUpperCase());
  }
}