import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ClickElsewhereDirective } from '../../directives/ClickElsewhereDirective';
import { CommonModule } from '@angular/common';
import { DropdownItems } from './dropdown.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input({ required: true }) dropdownItems!: DropdownItems[];
  @Output() itemClicked: EventEmitter<DropdownItems> =
    new EventEmitter<DropdownItems>();

  selectedSortOption: string = '';
  dropdown: boolean = false;

  toggleDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  closeDropdown(): void {
    this.dropdown = false;
  }

  onItemClick(item: string): void {
    const selectedItem = this.dropdownItems.find(
      (dropdown) => dropdown.value === item
    );

    if (selectedItem) {
      this.itemClicked.emit({
        label: selectedItem.label,
        value: selectedItem.value,
      });
      this.closeDropdown();
    }
  }
}
