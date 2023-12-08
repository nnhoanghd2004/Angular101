import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div id="container" class="grid">
      <div class="row sm-gutter ">
        @for (product of products; track product.id) {
        <div class="col l-3 m-4 c-12">
          <div class="container-product">
            <div (click)="removeProduct(product.id)" class="btn-remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="15"
                viewBox="0 0 384 512"
              >
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </div>
            <div class="wrap-img">
              <img [src]="product.imgLink" alt="" class="img" />
            </div>
            <div class="wrap-info">
              <div class="info-name">{{ product.name }}</div>
              <div class="info-mat">{{ product.materials }}</div>
              <div class="info-price">{{ product.price }}$</div>
            </div>
          </div>
        </div>
        } @empty {
        <div id="no-pro">No products found</div>
        }
      </div>
    </div>
  `,
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = require('../../../assets/json/products.json');

  removeProduct(id: string) {
    if (localStorage.getItem('isLogin'))
      this.products = this.products.filter((product: any) => product.id != id);
    else alert('You need sign in');
  }
}
