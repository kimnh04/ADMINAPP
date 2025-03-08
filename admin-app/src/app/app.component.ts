import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ HeaderComponent, RouterOutlet, NgClass] // Import các component
})
export class AppComponent {
  title="admin-app";
  isSidebarOpen = true;

  toggleSidebar(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }
  // constructor(public router: Router) {}

  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToCustomer() {
    this.router.navigate(['/customer-management']);
  }

  navigateToProduct() {
    this.router.navigate(['/product-management']);
  }

  navigateToReservation() {
    this.router.navigate(['/reservation-management']);
  }

  navigateToOrder() {
    this.router.navigate(['/order-management']);
  }

  navigateToLogout() {
    this.router.navigate(['/log-out']);
  }
}