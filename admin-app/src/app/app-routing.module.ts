import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { LogInComponent } from './log-in/log-in.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'reservation-management', component: ReservationManagementComponent },
  { path: 'order-management', component: OrderManagementComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: '', redirectTo: '/product-management', pathMatch: 'full' },
  { path: 'add-order', component: AddOrderComponent },
  { path: 'add-reservation', component: AddReservationComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'order-detail', component: OrderDetailComponent},
  { path: 'edit-customer', component: EditCustomerComponent},
  { path: 'reservation-detail', component: ReservationDetailComponent},
  { path: 'edit-product', component: EditProductComponent},
  { path: 'app-log-in', component: LogInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Thêm { useHash: true }
  exports: [RouterModule],
})
export class AppRoutingModule { }