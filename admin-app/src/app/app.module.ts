import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { LogOutComponent } from './log-out/log-out.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AddOrderComponent,
    AddReservationComponent,
    OrderDetailComponent,
    EditProductComponent,
    EditCustomerComponent,
    ReservationDetailComponent,
    NotFoundComponent,
    CustomerManagementComponent,
    DashboardComponent,
    OrderManagementComponent,
    ReservationManagementComponent,
    ProductManagementComponent,
    LogOutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Chỉ cần import AppRoutingModule thôi
    FormsModule,
    CommonModule,
    RouterModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }