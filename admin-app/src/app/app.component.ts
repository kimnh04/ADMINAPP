import { Component } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AddProductComponent, AddReservationComponent, ReservationDetailComponent ],
})
export class AppComponent {
  title = 'admin-app';
}