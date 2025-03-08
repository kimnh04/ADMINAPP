import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';

interface Order {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  subTotal: number;
  selected: boolean; // To track selected orders
}

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  orders: Order[] = [
    { id: 'O001', productName: 'Product A', quantity: 2, unitPrice: 50000, subTotal: 100000, selected: false },
    { id: 'O002', productName: 'Product B', quantity: 1, unitPrice: 75000, subTotal: 75000, selected: false }
  ];

  // Cập nhật số lượng đơn hàng
  orderCount: number = this.orders.length;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  // Xử lý chọn tất cả đơn hàng
  selectAllOrders(event: any) {
    const isChecked = event.target.checked;
    this.orders.forEach(order => {
      order.selected = isChecked;
    });
  }

  // Xử lý chọn đơn hàng riêng biệt
  toggleOrderSelection(order: Order) {
    order.selected = !order.selected;
  }

  // Xử lý xóa những đơn hàng được chọn
  deleteSelectedOrders() {
    this.orders = this.orders.filter(order => !order.selected);
    this.updateOrderCount();
  }

  // Xóa đơn hàng theo ID
  deleteOrder(orderId: string) {
    this.orders = this.orders.filter(order => order.id !== orderId);
    this.updateOrderCount();
  }

  // Cập nhật số lượng đơn hàng
  updateOrderCount() {
    this.orderCount = this.orders.length;
  }

  // Hàm format tiền tệ
  formatPrice(price: number): string {
    return formatCurrency(price, this.locale, '', 'VND').replace('VND', '') + ' ₫';
  }

  // Hàm chỉnh sửa đơn hàng (Chưa triển khai)
  editOrder(order: Order) {
    console.log('Editing order:', order);
    // Logic chỉnh sửa đơn hàng sẽ được thêm vào đây
  }
}
