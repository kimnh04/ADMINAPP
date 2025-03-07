import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  status: string;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  products: Product[] = [
    { id: 'P001', name: 'Sample Product', price: 100000, stock: 20, status: 'In stock', category: 'Electronics', imageUrl: 'images/sample.jpg' }
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  toggleStatus(product: Product) {
    product.status = product.status === 'In stock' ? 'Out of stock' : 'In stock';
  }

  deleteProduct(productId: string) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  editProduct(product: Product) {
    console.log('Editing product:', product);
    // Logic chỉnh sửa sản phẩm sẽ được thêm vào đây
  }

  formatPrice(price: number): string {
    return formatCurrency(price, this.locale, '', 'VND').replace('VND', '') + ' ₫';
  }
}
