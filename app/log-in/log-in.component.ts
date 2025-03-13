import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {Router, RouterModule} from '@angular/router'


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports:[ReactiveFormsModule, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  private validEmail = 'reboundpiercing.official@gmail.com';
  private validPassword = 'Reboundcingcing2025';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberPassword: [false]
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.loginForm.value); // Kiểm tra xem form có được gửi không
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email === this.validEmail && password === this.validPassword) {
        // Đăng nhập thành công
        this.successMessage = 'Login successful!';
        this.errorMessage = null;
        setTimeout(() => {
          this.router.navigate(['/forgot-password']);
        }, 1500);
      } else {
        // Nếu thông tin đăng nhập sai
        this.errorMessage = 'Incorrect email or password.';
        this.successMessage = null;
      }
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
      this.successMessage = null;
    }
  }
}