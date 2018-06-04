import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../app/product';
import { ApiProvider } from "../../providers/api/api";

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

 
  items: Array<Product>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.items = [];
    this.populateItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  populateItems() {
    this.apiProvider.get('products')
      .then(data => {
        Object.keys(data).forEach(key=> {
          this.items.push(new Product(parseInt(data[key].ID), parseInt(data[key].POIDS), parseInt(data[key].VOLUME), parseInt(data[key].X), parseInt(data[key].Y))); 
        });
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ProductListPage, {
      item: item
    });
  }
}