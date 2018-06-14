import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Tour} from "../../app/tour";
import {ApiProvider} from "../../providers/api/api";
import {TourPage} from "../tour/tour";


@IonicPage()
@Component({
  selector: 'page-tour-list',
  templateUrl: 'tour-list.html',
})
export class TourListPage {

  items: Array<Tour>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.items = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourListPage');
  }

  ionViewDidEnter() {
    this.items = [];
    this.populateItems();
  }

  populateItems() {
    this.apiProvider.get('tours')
      .then(data => {
        Object.keys(data).forEach(key=> {
          this.items.push(new Tour(parseInt(data[key].ID), parseInt(data[key].ETAT)));
        });
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(TourPage, {
      item: item
    });
  }
}
