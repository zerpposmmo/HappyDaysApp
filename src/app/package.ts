import {Tour} from "./tour";
import {PackageProductQuantity} from "./packageProductQuantity";

export class Package {
  private _id: number;
  private _products: Array<PackageProductQuantity>;
  private _poidsMax: number;
  private _volumeMax: number;
  private _orderId: number;
  private _tour: Tour;

  constructor(id: number,poidsMax: number, volumeMax: number, orderid: number, tour: Tour) {
    this._id = id;
    this._poidsMax = poidsMax;
    this._volumeMax = volumeMax;
    this._orderId = orderid;
    this._tour = tour;
  }

  get id(): number {
    return this._id;
  }

  get products(): Array<PackageProductQuantity> {
    return this._products;
  }

  get poidsMax(): number {
    return this._poidsMax;
  }

  get volumeMax(): number {
    return this._volumeMax;
  }

  get orderId(): number {
    return this._orderId;
  }

  get tour(): Tour {
    return this._tour;
  }
}
