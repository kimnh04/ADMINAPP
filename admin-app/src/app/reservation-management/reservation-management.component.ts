import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';

interface Reservation {
  id: string;
  customerName: string;
  serviceType: string;
  status: string;
  reservationDate: string;
  selected: boolean; // Add selected property for handling checkbox state
}

@Component({
  selector: 'app-reservation-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})
export class ReservationManagementComponent {
  reservations: Reservation[] = [
    { id: 'R001', customerName: 'John Doe', serviceType: 'Consulting', status: 'Confirmed', reservationDate: '2025-03-10', selected: false }
  ];

  // Update the reservation count
  reservationCount: number = this.reservations.length;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  // Format the reservation date
  formatDate(date: string): string {
    return formatDate(date, 'mediumDate', this.locale);
  }

  // Toggle reservation status
  toggleStatus(reservation: Reservation) {
    reservation.status = reservation.status === 'Confirmed' ? 'Cancelled' : 'Confirmed';
  }

  // Delete a reservation by its ID
  deleteReservation(reservationId: string) {
    this.reservations = this.reservations.filter(reservation => reservation.id !== reservationId);
    this.updateReservationCount();
  }

  // Edit a reservation (logic can be added later)
  editReservation(reservation: Reservation) {
    console.log('Editing reservation:', reservation);
  }

  // Select or deselect all reservations
  selectAllReservations(event: any) {
    const isChecked = event.target.checked;
    this.reservations.forEach(reservation => {
      reservation.selected = isChecked;
    });
  }

  // Toggle selection of an individual reservation
  toggleReservationSelection(reservation: Reservation) {
    reservation.selected = !reservation.selected;
  }

  // Delete selected reservations
  deleteSelectedReservations() {
    this.reservations = this.reservations.filter(reservation => !reservation.selected);
    this.updateReservationCount();
  }

  // Update the total reservation count
  updateReservationCount() {
    this.reservationCount = this.reservations.length;
  }
}
