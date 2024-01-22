import { DropdownComponent } from './dropdown.component';

export interface DropdownItems {
  label: DropdownLabel;
  value: DropdownValue;
}

export const enum DropdownLabel {
  'Sort by name' = 'Sort by name',
  'Sort by rating' = 'Sort by rating',
}
export const enum DropdownValue {
  'Sort by name' = 'Sort by name',
  'Sort by rating' = 'Sort by rating',
}
