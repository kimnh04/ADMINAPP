
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'



@Component({
  selector: 'app-forgot-password',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.log('Forgot Password data:', this.forgotPasswordForm.value);
      // Thêm logic gửi yêu cầu xác nhận quên mật khẩu tại đây
    }
  }
}
