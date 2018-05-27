import {Package} from "./package";

export class Tour {
  private _id: number;
  private _packages: Array<Package>;


  constructor(id: number, packages: Array<Package>) {
    this._id = id;
    this._packages = packages;
  }


  get id(): number {
    return this._id;
  }

  get packages(): Array<Package> {
    return this._packages;
  }
}
