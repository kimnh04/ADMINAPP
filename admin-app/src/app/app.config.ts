import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: AddProductComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};