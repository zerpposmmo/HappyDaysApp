import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order } from '../../app/order';
import { ApiProvider } from "../../providers/api/api";
import {OrderPage} from "../order/order";


/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

  items: Array<Order>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.items = [];
    this.populateItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderistPage');
  }

  populateItems() {
    this.apiProvider.get('orders')
      .then(data => {
        Object.keys(data).forEach(key=> {
          this.items.push( new Order(parseInt(data[key].ID),parseInt(data[key].COLISMAX)));
        });
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(OrderPage, {
      item: item
    });
  }
}
