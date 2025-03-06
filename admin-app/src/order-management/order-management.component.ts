import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';

interface Order {
  productName: string;
  quantity: number;
  unitPrice: number;
  subTotal: number;
}

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.css'
})
export class OrderManagementComponent {
  orders: Order[] = [
    { productName: 'Sample Product', quantity: 2, unitPrice: 50000, subTotal: 100000 }
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  deleteOrder(orderIndex: number) {
    this.orders.splice(orderIndex, 1);
  }

  formatPrice(price: number): string {
    return formatCurrency(price, this.locale, '', 'VND').replace('VND', '') + ' ₫';
  }
}
