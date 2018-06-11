import {Product} from "./product";

export class OrderLine {

  private _product: Product;
  private _quantity: number;

  constructor(quantity: number, product: Product) {
    this._quantity = quantity;
    this._product = product;
  }

  get product(): Product {
    return this._product;
  }

  get quantity(): number {
    return this._quantity;
  }
}
