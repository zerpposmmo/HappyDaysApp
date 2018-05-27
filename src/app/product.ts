import {Location} from "./location";

export class Product {
  private _id: number;
  private _poids: number;
  private _volume: number;
  private _location: Location;

  constructor(id: number, poids: number, volume: number, location: Location) {
    this._id = id;
    this._poids = poids;
    this._volume = volume;
    this._location = location;
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

  get location(): Location {
    return this._location;
  }
}
