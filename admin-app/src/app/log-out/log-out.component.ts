import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {
  onYesClick() {
    console.log('Yes clicked');
  }

  onNoClick() {
    console.log('No clicked');
  }
}