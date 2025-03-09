import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

const routes: Routes = [
  { path: '', component: AddProductComponent },
  { path: '', component: AddOrderComponent },
  { path: '', component: AddReservationComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};