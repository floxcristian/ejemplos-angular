import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() _product: IProduct;
  @Input() index: number;

  ngOnInit(): void {}

  addCart(product) {
    console.log('addCart: ', product);
    // this.cart.push(product);
  }
}
