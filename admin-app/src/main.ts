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
    { path: 'reservation-management', loadComponent: () => import('./app/reservation-management/reservation-management.component').then(m => m.ReservationManagementComponent) },
    { path: 'order-management', loadComponent: () => import('./app/order-management/order-management.component').then(m => m.OrderManagementComponent) },
    { path: 'log-out', loadComponent: () => import('./app/log-out/log-out.component').then(m => m.LogOutComponent) }



  ])]
})
.catch(err => console.error(err));