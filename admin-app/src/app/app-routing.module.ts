import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: AddProductComponent }, // Trang chính
  { path: '**', redirectTo: '' } // Điều hướng về trang chủ nếu route không hợp lệ
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }