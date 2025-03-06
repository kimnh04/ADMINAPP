import { CommonModule } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

interface Customer {
  name: string;
  email: string;
  id: string;
  totalOrders: number;
  phone: string;
}
@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent {
  customers: Customer[] = [
    { name: 'John Doe', email: 'john.doe@example.com', id: 'C001', totalOrders: 5, phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', id: 'C002', totalOrders: 3, phone: '987-654-3210' }
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  deleteCustomer(customerIndex: number) {
    this.customers.splice(customerIndex, 1);
  }

  editCustomer(customer: Customer) {
    console.log('Editing customer:', customer);
    // Logic for editing customer will go here
  }
}
