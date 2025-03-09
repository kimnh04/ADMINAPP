import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-mn',
  standalone: false,
  templateUrl: './customer-mn.component.html',
  styleUrl: './customer-mn.component.css'
})
export class CustomerMnComponent {
  totalCustomers = 235;
  members = 125;
  activeNow = 21;

  customers = [
    { name: 'Diem Thuy', email: 'ndiemthuy01@gmail.com', id: 1422, totalOrders: 5, phone: '0123456789', selected: false },
    { name: 'Song Tin', email: 'hsongtin342@gmail.com', id: 1325, totalOrders: 2, phone: '0123456780', selected: false }
  ];

  selectAll = false;

  editCustomer(index: number) {
    console.log('Editing customer', this.customers[index]);
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }

  deleteSelectedCustomers() {
    this.customers = this.customers.filter(customer => !customer.selected);
  }
}
