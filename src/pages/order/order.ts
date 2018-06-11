import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Order} from "../../app/order";
import {ApiProvider} from "../../providers/api/api";
import {OrderLine} from "../../app/orderLine";
import {ProductPage} from "../product/product";
import {Product} from "../../app/product";


@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  order: Order;
  items: Array<OrderLine>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.items = [];
    this.order = this.navParams.get('item');
    this.getOrderInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  getOrderInfo() {
    this.apiProvider.get('order/' + this.order.id)
      .then(data => {
        Object.keys(data).forEach(key => {
          let ol = new OrderLine(data[key].QUANTITE, new Product(parseInt(data[key].PRODUIT_ID), parseInt(data[key].POIDS), parseInt(data[key].VOLUME), parseInt(data[key].X), parseInt(data[key].Y)));
          this.items.push(ol);
        });
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ProductPage, {
      item: item.product
    });
  }
}
