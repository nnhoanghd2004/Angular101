import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div id="title">Sign Up</div>
      <div class="row">
        <input
          type="text"
          class="input"
          id="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          class="input"
          id="lastName"
          placeholder="Last Name"
        />
      </div>
      <input
        type="text"
        class="input"
        id="phoneNumber"
        placeholder="Phone Number"
      />
      <input
        type="password"
        class="input"
        id="password"
        placeholder="Password"
      />
      <input
        type="password"
        class="input"
        id="rePassword"
        placeholder="Re-Password"
      />
      <input type="text" class="input" id="address" placeholder="Address" />
      <a routerLink="/SignUp/ConfirmPhone" id="btn-login">
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
      </a>
      <a routerLink="/SignIn" class="goToSignIn">ALREADY HAVE AN ACCOUNT?</a>
    </div>
  `,
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {}
