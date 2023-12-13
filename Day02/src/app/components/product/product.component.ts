import { CommonModule } from '@angular/common';
import {
  Component,
  Renderer2,
  ElementRef,
  AfterViewInit,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <div class="col l-3 m-4 c-12"> -->
    <div class="container-product">
      <div class="btn-remove" (click)="remove(product.id)">
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
        <span class="info-mat">{{ product.materials }}</span>

        <div class="info-price">{{ product.price }}$</div>
      </div>
    </div>
    <!-- </div> -->
    <!-- <div class="product-">
      <div class="product-image">
        <img src="path_to_your_image.jpg" alt="Sản phẩm" />
      </div>
      <div class="product-info">
        <h2>Tên sản phẩm</h2>
        <p>Mô tả sản phẩm...</p>
        <p>Giá: $100</p>
        <p>Số lượng: 10</p>
      </div>
    </div> -->
  `,
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) productID!: string;
  @Output() removeProduct = new EventEmitter<any>();
  products = require('../../../assets/json/products.json');
  product: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.product = this.products[parseInt(this.productID) - 1 + ''];
  }
  ngAfterViewInit() {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'col');
    this.renderer.addClass(element, 'l-3');
    this.renderer.addClass(element, 'm-4');
    this.renderer.addClass(element, 'c-12');
  }

  remove(id: string) {
    this.removeProduct.emit(id);
  }
}
