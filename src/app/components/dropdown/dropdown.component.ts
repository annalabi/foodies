import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickElsewhereDirective } from '../../directives/ClickElsewhereDirective';
import { CommonModule } from '@angular/common';
import { DropdownItems } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, ClickElsewhereDirective],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input({ required: true }) dropdownItems!: DropdownItems[];
  @Output() itemClicked: EventEmitter<DropdownItems> =
    new EventEmitter<DropdownItems>();

  dropdown: boolean = false;

  toggleDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  closeDropdown(): void {
    this.dropdown = false;
  }

  onItemClick(item: DropdownItems): void {
    this.itemClicked.emit(item);
    this.closeDropdown();
  }
}
