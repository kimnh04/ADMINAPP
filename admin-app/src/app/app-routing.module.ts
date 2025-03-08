import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { LogOutComponent } from './log-out/log-out.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'reservation-management', component: ReservationManagementComponent },
  { path: 'order-management', component: OrderManagementComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Thêm { useHash: true }
  exports: [RouterModule],
})
export class AppRoutingModule { }