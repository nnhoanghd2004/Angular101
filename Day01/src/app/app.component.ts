import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SignInFormComponent, RouterOutlet],
  template: `
    <div class="backgr">
      <app-navbar></app-navbar>
      <router-outlet> </router-outlet>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Day01';
}
