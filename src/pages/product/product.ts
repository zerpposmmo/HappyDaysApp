import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";
import { Product } from "../../app/product"

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product : Product; 

  constructor(public navCtrl: NavController, public navParams: NavParams,  public apiProvider: ApiProvider) {
    this.product = this.navParams.get('item');
    this.getProductInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  getProductInfo() {
    this.apiProvider.get('product/' + this.product.id)
      .then(data => {
        Object.keys(data).forEach(key=> {
          let p = new Product(parseInt(data[key].ID), parseInt(data[key].POIDS), parseInt(data[key].VOLUME), parseInt(data[key].X), parseInt(data[key].Y)); 
          this.product = p;
        });
      });
  }
}
