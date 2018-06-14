import {Package} from "./package";
import {Product} from "./product";

export  class PackageProductQuantity {
  private _package: Package;
  private _product: Product;
  private _quantity: number;
  private _tourStatus: number;

  constructor(packageP: Package, product: Product, quantity: number) {
    this._package = packageP;
    this._product = product;
    this._quantity = quantity;
    this._tourStatus = 0;
  }

  get package(): Package {
    return this._package;
  }

  get product(): Product {
    return this._product;
  }

  get quantity(): number {
    return this._quantity;
  }

  get tourStatus(): number {
    return this._tourStatus;
  }

  set tourStatus(value: number) {
    this._tourStatus = value;
  }
}
