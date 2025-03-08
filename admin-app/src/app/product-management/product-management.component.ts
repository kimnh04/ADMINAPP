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
  selected: boolean; // Thêm thuộc tính selected
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
    { id: 'P001', name: 'Sample Product', price: 100000, stock: 20, status: 'Available', category: 'Electronics', imageUrl: 'images/sample.jpg', selected: false }
  ];

  // Cập nhật số lượng sản phẩm
  productCount: number = this.products.length;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  toggleStatus(product: Product) {
    product.status = product.status === 'In stock' ? 'Out of stock' : 'In stock';
  }

  deleteProduct(productId: string) {
    this.products = this.products.filter(product => product.id !== productId);
    this.updateProductCount();
  }

  editProduct(product: Product) {
    console.log('Editing product:', product);
  }

  formatPrice(price: number): string {
    return formatCurrency(price, this.locale, '', 'VND').replace('VND', '') + ' ₫';
  }

  // Xử lý chọn tất cả sản phẩm
  selectAllProducts(event: any) {
    const isChecked = event.target.checked;
    this.products.forEach(product => {
      product.selected = isChecked;
    });
  }

  // Xử lý chọn sản phẩm riêng biệt
  toggleProductSelection(product: Product) {
    product.selected = !product.selected;
  }

  deleteSelectedProducts() {
    this.products = this.products.filter(product => !product.selected);
    this.updateProductCount();
  }

  // Cập nhật số lượng sản phẩm
  updateProductCount() {
    this.productCount = this.products.length;
  }
}
