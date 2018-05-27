import {Product} from "./product";
import {Order} from "./order";
import {Tour} from "./tour";

export class Package {
  private _products: Array<Product>;
  private _poidsMax: number;
  private _volumeMax: number;
  private _order: Order;
  tour: Tour;

  constructor(products: Array<Product>, poidsMax: number, volumeMax: number) {
    this._products = products;
    this._poidsMax = poidsMax;
    this._volumeMax = volumeMax;
  }

  get products(): Array<Product> {
    return this._products;
  }

  get poidsMax(): number {
    return this._poidsMax;
  }

  get volumeMax(): number {
    return this._volumeMax;
  }

  get order(): Order {
    return this._order;
  }
}
