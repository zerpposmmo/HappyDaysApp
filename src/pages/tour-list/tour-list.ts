import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Tour} from "../../app/tour";
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the TourListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour-list',
  templateUrl: 'tour-list.html',
})
export class TourListPage {

  items: Array<Tour>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.items = [];
    this.populateItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourListPage');
  }

  populateItems() {
    this.apiProvider.get('tours')
      .then(data => {
        Object.keys(data).forEach(key=> {
          this.items.push(new Tour(parseInt(key)));
        });
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(TourListPage, {
      item: item
    });
  }
}
