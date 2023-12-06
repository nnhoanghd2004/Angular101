import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div id="wrap-navbar">
      <div id="navbar">boulangerie de heidi</div>
      <div class="wrap-btn">
        <a routerLink="/SignIn" class="btn-user">SignIn</a>
        <a routerLink="/SignUp" class="btn-user">SignUp</a>
      </div>
    </div>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
