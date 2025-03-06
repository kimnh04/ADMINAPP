import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'add-reservation',
  standalone: true,
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css'],
  encapsulation: ViewEncapsulation.None // Cho CSS global
})
export class AddReservationComponent { }