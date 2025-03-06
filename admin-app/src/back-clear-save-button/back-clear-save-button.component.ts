import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Để thực hiện quay lại trang trước

@Component({
  selector: 'app-back-clear-save-button',
  standalone: false,
  templateUrl: './back-clear-save-button.component.html',
  styleUrl: './back-clear-save-button.component.css'
})
export class BackClearSaveButtonComponent {
  constructor(private Router: Router) {}

  // Chức năng quay lại trang trước
  goBack() {
    this.Router.navigate([history.back()]);
  }

  // Chức năng xóa tất cả các ô input
  clearInputs() {
    // Cách clear sẽ tùy thuộc vào cấu trúc của các ô input. Ví dụ:
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input: any) => {
      input.value = ''; // Xóa giá trị của từng ô input
    });
  }

  // Chức năng lưu dữ liệu xuống database (hiện tại chỉ là code giao diện)
  saveData() {
    console.log('Saving data...'); 
    // Nếu cần thêm chức năng thực tế, bạn có thể gọi API để lưu dữ liệu tại đây.
  }
}
