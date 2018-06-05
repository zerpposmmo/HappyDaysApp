export class OrderLine {
  private _productId: number;
  private _quantity: number;


  constructor(productId: number, quantity: number) {
    this._productId = productId;
    this._quantity = quantity;
  }


  get productId(): number {
    return this._productId;
  }

  get quantity(): number {
    return this._quantity;
  }
}
