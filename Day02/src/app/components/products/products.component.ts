import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, ProductComponent, CommonModule],
  template: `
    <app-navbar></app-navbar>
    <div id="container" class="grid">
      <div class="row sm-gutter ">
        @for (product of products; track product.id) {
        <app-product
          (removeProduct)="removeProduct($event)"
          [productID]="product.id"
        ></app-product>
        } @empty {
        <div id="no-pro">No products found</div>
        } @for (btn of btns; track $index) {
        <ng-container
          [ngTemplateOutlet]="btnday3"
          [ngTemplateOutletContext]="{ name: btn }"
        >
        </ng-container>
        }
      </div>
    </div>
    <ng-template #btnday3 let-name="name">
      <button>{{ name }}</button>
    </ng-template>
  `,
  styleUrl: './products.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
  products = require('../../../assets/json/products.json');
  btns = ['A', 'B', 'C', 'D'];

  constructor(private router: Router) {}

  removeProduct(id: string) {
    if (localStorage.getItem('isLogin'))
      this.products = this.products.filter((product: any) => product.id != id);
    else alert('You need sign in');
    this.router;
  }

  viewDetail(id: any) {
    this.router.navigate(['/Product', id]);
  }
}
