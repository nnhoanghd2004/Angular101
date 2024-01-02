import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">{{ product.name }}</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-4">
                  <img src="{{ product.image }}" class="img-responsive" />
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-6">
                      <h4>Price</h4>
                      <p>{{ product.price }}</p>
                    </div>
                    <div class="col-md-6">
                      <h4>Stock</h4>
                      <p>{{ product.stock }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  products = require('../../../assets/json/products.json');
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.products[parseInt(params['id']) - 1 + ''];
    });
  }
  product: any;
}
