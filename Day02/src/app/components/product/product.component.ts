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
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-product" (click)="handleClick(product.id, $event)">
      <div class="btn-remove remove">
        <svg
          class="remove"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="15"
          viewBox="0 0 384 512"
        >
          <path
            class="remove"
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
        <button class="btn-buy">buy</button>
      </div>
    </div>
  `,
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) productID!: string;
  @Output() removeProduct = new EventEmitter<any>();
  @Output() buyProduct = new EventEmitter<any>();

  products = this.productsService.getAllProducts();
  product: any;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private productsService: ProductsService
  ) {}

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
  handleClick(id: string, e: any) {
    console.log(e.target);
    console.log(e.target.classList);
    console.log(e.target.classList.contains('btn-buy'));

    if (e.target.classList.contains('remove')) this.removeProduct.emit(id);
    else if (e.target.classList.contains('btn-buy'))
      this.buyProduct.emit(this.product.name);
    else this.productsService.viewDetail(this.product.id);
  }
}
