import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  standalone: false,
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent {
  items = [
    { name: 'Item 1', selected: false },
    { name: 'Item 2', selected: false },
    { name: 'Item 3', selected: false },
    { name: 'Item 4', selected: false }
  ];

  // Hàm xóa các mục được chọn
  deleteSelectedItems() {
    this.items = this.items.filter(item => !item.selected);
  }

}
