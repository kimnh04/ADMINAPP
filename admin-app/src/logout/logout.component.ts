import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
// Hàm xác nhận đăng xuất
confirmLogout() {
  console.log('User confirmed logout.');
  // Logic đăng xuất sẽ được thực hiện ở đây
}

// Hàm hủy đăng xuất
cancelLogout() {
  console.log('User canceled logout.');
  // Logic hủy đăng xuất sẽ được thực hiện ở đây
}
}
