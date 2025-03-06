import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-product',
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'], // Đúng tên file
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None, // Tắt ViewEncapsulation
})
export class AddProductComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form Submitted');
    alert('Product Saved!');
  }

  formatPrice(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      let value = input.value.replace(/\D/g, "");
      input.value = new Intl.NumberFormat('vi-VN').format(Number(value));
    }
  }
}