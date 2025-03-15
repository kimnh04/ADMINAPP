import { Component, Inject, LOCALE_ID, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router ,RouterModule } from '@angular/router';

interface Customer {
  id: string;
  customerName: string;
  email: string;
  totalOrders: number;
  phone: string;
  selected: boolean;
}

@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent {
  customers = signal<Customer[]>([
    { id: 'C001', customerName: 'Nguyen Thi Mai', email: 'mai@example.com', totalOrders: 5, phone: '0912345678', selected: false },
    { id: 'C002', customerName: 'Tran Minh Phuc', email: 'phuc@example.com', totalOrders: 3, phone: '0987654321', selected: false }
  ]);

  searchQuery = signal('');

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private router: Router // Inject Router
  ) {}

  selectAllCustomers(event: any) {
    const isChecked = event.target.checked;
    this.customers.update(customers =>
      customers.map(customer => ({ ...customer, selected: isChecked }))
    );
  }

  toggleCustomerSelection(customer: Customer) {
    this.customers.update(customers =>
      customers.map(c => c.id === customer.id ? { ...c, selected: !c.selected } : c)
    );
  }

  deleteSelectedCustomers() {
    this.customers.update(customers => customers.filter(customer => !customer.selected));
  }

  deleteCustomer(customerId: string) {
    this.customers.update(customers => customers.filter(customer => customer.id !== customerId));
  }

  editCustomer(customer: Customer) {
    this.router.navigate(['/edit-customer', customer.id]);
  }
   

  updateSearchQuery(event: any) {
    this.searchQuery.set(event.target.value.toLowerCase());
  }

  filteredCustomers = computed(() => {
    return this.customers().filter(customer =>
      customer.customerName.toLowerCase().includes(this.searchQuery()) ||
      customer.email.toLowerCase().includes(this.searchQuery()) ||
      customer.id.toLowerCase().includes(this.searchQuery()) ||
      customer.phone.includes(this.searchQuery())
    );
  });
}
