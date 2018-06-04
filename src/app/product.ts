import {Location} from "./location";

export class Product {
  private _id: number;
  private _poids: number;
  private _volume: number;
  private _x: number;
  private _y: number;
  

  constructor(id: number, poids: number, volume: number, x : number, y : number) {
    this._id = id;
    this._poids = poids;
    this._volume = volume;
    this._x = x;
    this._y = y;
  }

  get id(): number {
    return this._id;
  }

  get poids(): number {
    return this._poids;
  }

  get volume(): number {
    return this._volume;
  }

  get x(): number {
    return this._x;
  }
  get y(): number {
    return this._y;
  }
}
