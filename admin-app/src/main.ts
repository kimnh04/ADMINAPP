import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';


bootstrapApplication(AppComponent, {
  providers: [provideRouter([
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customer-management', loadComponent: () => import('./app/customer-management/customer-management.component').then(m => m.CustomerManagementComponent) },
    { path: 'product-management', loadComponent: () => import('./app/product-management/product-management.component').then(m => m.ProductManagementComponent) },
    { path: 'add-product', loadComponent: () => import('./app/add-product/add-product.component').then(m => m.AddProductComponent) },
    { path: 'reservation-management', loadComponent: () => import('./app/reservation-management/reservation-management.component').then(m => m.ReservationManagementComponent) },
    { path: 'order-management', loadComponent: () => import('./app/order-management/order-management.component').then(m => m.OrderManagementComponent) },
    { path: 'log-out', loadComponent: () => import('./app/log-out/log-out.component').then(m => m.LogOutComponent) },
    { path: 'add-order', loadComponent: () => import('./app/add-order/add-order.component').then(m => m.AddOrderComponent) },
    { path: 'add-reservation', loadComponent: () => import('./app/add-reservation/add-reservation.component').then(m => m.AddReservationComponent) },
    { path: 'log-in', loadComponent: () => import('./app/log-in/log-in.component').then(m => m.LogInComponent) },
    { path: 'order-detail', loadComponent: () => import('./app/order-detail/order-detail.component').then(m => m.OrderDetailComponent) },
    {path: 'edit-customer', loadComponent: () => import('./app/edit-customer/edit-customer.component').then(m => m.EditCustomerComponent) },
    {path: 'reservation-detail', loadComponent: () => import('./app/reservation-detail/reservation-detail.component').then(m => m.ReservationDetailComponent) },
    {path: 'edit-product', loadComponent: () => import('./app/edit-product/edit-product.component').then(m => m.EditProductComponent) },
    

  ])]
})
.catch(err => console.error(err));