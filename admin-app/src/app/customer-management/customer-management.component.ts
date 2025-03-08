import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Customer {
  id: string;
  customerName: string;
  email: string;
  totalOrders: number;
  phone: string;
  selected: boolean; // To track selected customers
}

@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent {
  customers: Customer[] = [
    { id: 'C001', customerName: 'Nguyen Thi Mai', email: 'mai@example.com', totalOrders: 5, phone: '0912345678', selected: false },
    { id: 'C002', customerName: 'Tran Minh Phuc', email: 'phuc@example.com', totalOrders: 3, phone: '0987654321', selected: false }
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  // Select all customers
  selectAllCustomers(event: any) {
    const isChecked = event.target.checked;
    this.customers.forEach(customer => {
      customer.selected = isChecked;
    });
  }

  // Toggle selection of a specific customer
  toggleCustomerSelection(customer: Customer) {
    customer.selected = !customer.selected;
  }

  // Delete selected customers
  deleteSelectedCustomers() {
    this.customers = this.customers.filter(customer => !customer.selected);
  }

  // Delete a single customer by ID
  deleteCustomer(customerId: string) {
    this.customers = this.customers.filter(customer => customer.id !== customerId);
  }

  // Edit customer information (logic to be added)
  editCustomer(customer: Customer) {
    console.log('Editing customer:', customer);
    // Logic to edit customer information
  }
}
