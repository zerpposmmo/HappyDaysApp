import {OrderLine} from "./orderLine";

export class Order {
  private _id: number;
  private _colisMax: number;
  private _orderLines: Array<OrderLine>;

  constructor(id: number, colisMax: number) {
    this._id = id;
    this._colisMax = colisMax;
  }

  get id(): number {
    return this._id;
  }

  get colisMax(): number {
    return this._colisMax;
  }

  get orderLines(): Array<OrderLine> {
    return this._orderLines;
  }
}
