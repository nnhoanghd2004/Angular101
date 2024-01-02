import { ProductsService } from './../../services/products/products.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, ProductComponent, CommonModule, RouterLink],
  template: `
    <app-navbar></app-navbar>
    <div id="container" class="grid">
      <div class="row sm-gutter ">
        @for (product of products; track product.id) {
        <app-product
          (buyProduct)="buyProduct($event)"
          (removeProduct)="removeProduct($event)"
          [productID]="product.id"
        ></app-product>
        } @empty {
        <div id="no-pro">No products found</div>
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
  products = this.productsService.getAllProducts();
  btns = ['A', 'B', 'C', 'D'];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  viewDetail(id: string) {
    this.productsService.viewDetail(id);
  }
  removeProduct(id: string) {
    this.productsService.removeProduct(id);
  }

  buyProduct(name: string) {
    this.productsService.buyProduct(name);
  }
}
