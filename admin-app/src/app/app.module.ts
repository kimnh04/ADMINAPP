import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddOrderComponent,
    AddReservationComponent,
    OrderDetailComponent,
    EditProductComponent,
    EditCustomerComponent,
    ReservationDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }