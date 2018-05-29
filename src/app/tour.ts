import {Package} from "./package";

export class Tour {
  private _id: number;
  private _packages: Array<Package>;

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  get packages(): Array<Package> {
    return this._packages;
  }
}
