import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Tour} from "../../app/tour";
import {ApiProvider} from "../../providers/api/api";
import {Package} from "../../app/package";
import {ProductListPage} from "../product-list/product-list";
import {NavigatePage} from "../navigate/navigate";

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  tour: Tour;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams,  public apiProvider: ApiProvider) {
    this.tour = this.navParams.get('item');
    this.getTourInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
  }
  getTourInfo() {
    this.apiProvider.get('tour/' + this.tour.id)
      .then(data => {
        Object.keys(data).forEach(key=> {
          let p = new Package(parseInt(data[key].ID), parseInt(data[key].POIDS_MAX), parseInt(data[key].VOLUME_MAX), parseInt(data[key].COMMANDE_ID), this.tour);
          this.tour.addPackage(p);
        });
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ProductListPage, {
      item: item
    });
  }

  startNavigation() {
    this.modalCtrl.create(NavigatePage, {
      item: this.tour
    }).present();
  }
}
