import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Kiểm tra nếu mật khẩu và xác nhận mật khẩu khớp
      if (this.resetPasswordForm.value.newPassword === this.resetPasswordForm.value.confirmPassword) {
        console.log('Password changed successfully:', this.resetPasswordForm.value);
        // Thêm logic đổi mật khẩu ở đây
      } else {
        console.log('Passwords do not match');
        // Thêm thông báo lỗi nếu cần
      }
    }
  }
}
