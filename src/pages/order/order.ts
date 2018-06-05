import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order } from "../../app/order";
import { ApiProvider } from "../../providers/api/api";


@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  order : Order;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public apiProvider: ApiProvider) {
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
          let p = new Order(parseInt(data[key].ID),parseInt(data[key].COLISMAX));
          this.order = p;
        });
      });
  }
}
