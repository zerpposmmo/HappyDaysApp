import {Package} from "./package";

export class Tour {
  private _id: number;
  private _packages: Array<Package>;
  private _etat: number;

  constructor(id: number, etat: number) {
    this.id = id;
    this.packages = [];
    this.etat = etat;
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

  get etat(): number {
    return this._etat;
  }

  set etat(value: number) {
    this._etat = value;
  }

  addPackage(p: Package) {
    this.packages.push(p);
  }
}
