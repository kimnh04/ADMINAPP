import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

interface Reservation {
  id: string;
  customerName: string;
  serviceType: string;
  status: string;
  reservationDate: string;
}

@Component({
  selector: 'app-reservation-management',
  standalone: false,
  templateUrl: './reservation-management.component.html',
  styleUrl: './reservation-management.component.css'
})
export class ReservationManagementComponent {
  reservations: Reservation[] = [
    { id: 'R001', customerName: 'John Doe', serviceType: 'Consulting', status: 'Confirmed', reservationDate: '2025-03-10' }
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  deleteReservation(reservationId: string) {
    this.reservations = this.reservations.filter(reservation => reservation.id !== reservationId);
  }

  editReservation(reservation: Reservation) {
    console.log('Editing reservation:', reservation);
    // Logic chỉnh sửa đặt chỗ sẽ được thêm vào đây
  }

  formatDate(date: string): string {
    return formatDate(date, 'mediumDate', this.locale);
  }
}

