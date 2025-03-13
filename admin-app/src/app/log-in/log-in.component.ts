import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  // Tài khoản và mật khẩu cố định
  private validEmail = 'reboundpiecring.official@gmail.com';
  private validPassword = 'Reboundcingcing2025';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],  
      password: ['', Validators.required],
      rememberPassword: [false],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === this.validEmail && password === this.validPassword) {
        // Đăng nhập thành công
        this.successMessage = 'Login successful!';
        this.errorMessage = null;
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 1500);
      } else {
        // Nếu thông tin đăng nhập sai
        this.errorMessage = 'Please check your email or password again';
        this.successMessage = null;
      }
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
      this.successMessage = null;
    }
  }
}
