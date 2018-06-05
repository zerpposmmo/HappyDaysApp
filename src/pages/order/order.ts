import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order } from "../../app/order";
import { ApiProvider } from "../../providers/api/api";
import {Product} from "../../app/product";
import {OrderLine} from "../../app/orderLine";


@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  order : Order;
  items : Array<OrderLine>;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public apiProvider: ApiProvider) {
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
        Object.keys(data).forEach(key=> {
          let ol = new OrderLine(data[key].ID, data[key].QUANTITE);
          this.items.push(ol);
        });
      });
  }
}
