import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  template: `
    <app-navbar> </app-navbar>
    <form [formGroup]="loginForm" (submit)="login($event)" class="container">
      <div id="title">Sign In</div>
      <input
        type="text"
        class="input"
        id="phoneNumber"
        placeholder="Phone Number"
        formControlName="phoneNumber"
      />
      <input
        type="password"
        class="input"
        id="password"
        placeholder="Password"
        formControlName="password"
      />
      <button type="submit" id="btn-login">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          />
        </svg>
      </button>
      <div id="more">
        <button class="more-link">Can't sign in ?</button>
        <a routerLink="/SignUp" class="more-link">Create account</a>
      </div>
    </form>
  `,
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  users = require('../../../assets/json/users.json');
  loginForm = new FormGroup({
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    // Kiểm tra xem có phải đang chạy trên trình duyệt không
    if (isPlatformBrowser(this.platformId)) {
      // Truy cập localStorage khi đang ở trình duyệt
      const storedData = window.localStorage.getItem('isLogin');
      if (storedData == '1') {
        this.router.navigate(['/Home']);
      }
    } else {
      console.log('Not running on a browser environment.');
    }
  }
  login(event: Event): void {
    event.preventDefault();
    if (!this.loginForm.invalid) {
      for (const user of this.users) {
        if (
          user.phoneNumber === this.loginForm.value.phoneNumber &&
          user.password === this.loginForm.value.password
        ) {
          localStorage.setItem('isLogin', '1');
          localStorage.setItem('account', JSON.stringify(user));
          this.router.navigate(['/Home']);
          // console.log('Login succesfull');
          break;
        }
      }
    }
  }
}
