import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div id="wrap-navbar">
      <a routerLink="/Home" id="navbar">boulangerie de heidi</a>
      @if (!isLogin) {
      <div class="wrap-btn">
        <a routerLink="/SignIn" class="btn-user">SignIn</a>
        <a routerLink="/SignUp" class="btn-user">SignUp</a>
      </div>
      } @else {
      <div class="wrap-btn">
        <div class="btn-user">
          <div id="username">{{ getFirstName() }} {{ getLastName() }}</div>
          <img [src]="getImgLink()" alt="" id="avatar" />
        </div>
        <div (click)="logOut()" class="btn-user">Log out</div>
      </div>
      }
    </div>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLogin = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Kiểm tra xem có phải đang chạy trên trình duyệt không
    if (isPlatformBrowser(this.platformId)) {
      // Truy cập localStorage khi đang ở trình duyệt
      const storedData = window.localStorage.getItem('isLogin');
      if (storedData) {
        this.isLogin = true;
      }
    } else {
      console.log('Not running on a browser environment.');
    }
  }

  logOut() {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('account');
    window.location.reload();
    this.router.navigate(['']);
  }

  getFirstName() {
    const account = localStorage.getItem('account');
    if (account) {
      // const data = JSON.parse(account);
      // return JSON.parse(account).firstName;
      return JSON.parse(account).firstName;
    }
  }

  getLastName() {
    const account = localStorage.getItem('account');
    if (account) {
      // const data = JSON.parse(account);
      // return JSON.parse(account).firstName;
      return JSON.parse(account).lastName;
    }
  }

  getImgLink() {
    const account = localStorage.getItem('account');
    if (account) {
      // const data = JSON.parse(account);
      // return JSON.parse(account).firstName;
      return JSON.parse(account).imgLink;
    }
  }
}
