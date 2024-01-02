import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = require('../../../assets/json/products.json');
  private btns = ['A', 'B', 'C', 'D'];

  constructor(private router: Router) {}

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products[parseInt(id) - 1 + ''];
  }

  removeProduct(id: string) {
    if (localStorage.getItem('isLogin'))
      this.products = this.products.filter((product: any) => product.id != id);
    else alert('You need sign in');
  }

  buyProduct(name: string) {
    alert(name);
  }

  viewDetail(id: any) {
    this.router.navigate(['/Product', id]);
  }
}
