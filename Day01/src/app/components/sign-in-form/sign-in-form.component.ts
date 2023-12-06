import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="container">
      <div id="title">Sign In</div>
      <input type="text" class="input" id="username" placeholder="Username" />
      <input
        type="password"
        class="input"
        id="password"
        placeholder="Password"
      />
      <a href="#" id="btn-login">
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
      <div id="more">
        <a routerLink="/" class="more-link">CAN’T SIGN IN ?</a>
        <a routerLink="/SignUp" class="more-link">CREATE ACCOUNT</a>
      </div>
    </div>
  `,
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {}
