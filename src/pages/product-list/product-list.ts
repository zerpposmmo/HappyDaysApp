import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Product} from '../../app/product';
import {ApiProvider} from "../../providers/api/api";
import {ProductPage} from "../product/product";
import {PackageProductQuantity} from "../../app/packageProductQuantity";

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  items: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.items = [];
    this.populateItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  populateItems() {
    console.log(this.navParams.get('item'));
    if (this.navParams.get('item')) {
      this.apiProvider.get('package/' + this.navParams.get('item').id)
        .then(data => {
          Object.keys(data).forEach(key => {
            this.items.push(new PackageProductQuantity(
              this.navParams.get('item'),
              new Product(parseInt(data[key].PRODUIT_ID), parseInt(data[key].POIDS), parseInt(data[key].VOLUME), parseInt(data[key].X), parseInt(data[key].Y)),
              data[key].QUANTITE));
          });
        });
    } else {
      this.apiProvider.get('products')
        .then(data => {
          Object.keys(data).forEach(key => {
            this.items.push(new Product(parseInt(data[key].ID), parseInt(data[key].POIDS), parseInt(data[key].VOLUME), parseInt(data[key].X), parseInt(data[key].Y)));
          });
        });
    }

  }

  itemTapped(event, item) {
    let product;
    if(item.product) {
      product = item.product;
    } else product = item;
    this.navCtrl.push(ProductPage, {
      item: product
    });
  }
}
