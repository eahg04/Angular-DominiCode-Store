import { Product } from './../interfaces/product.interfaces';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.addToCartClick.emit(this.product);
  }
}
