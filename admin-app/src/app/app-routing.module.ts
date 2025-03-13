import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Chặn nếu chưa đăng nhập
  { path: '', redirectTo: '/log-in', pathMatch: 'full' }, // Mặc định về login
  { path: 'side-bar', component: SideBarComponent },
  { path: 'reservation-management', component: ReservationManagementComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'order-management', component: OrderManagementComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}