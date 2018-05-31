import {Package} from "./package";

export class Tour {
  private _id: number;
  private _packages: Array<Package>;

  constructor(id: number) {
    this.id = id;
    this.packages = [];
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get packages(): Array<Package> {
    return this._packages;
  }

  set packages(value: Array<Package>) {
    this._packages = value;
  }

  addPackage(p: Package) {
    this.packages.push(p);
  }
}
