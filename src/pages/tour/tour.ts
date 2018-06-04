import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Tour} from "../../app/tour";
import {ApiProvider} from "../../providers/api/api";
import {Package} from "../../app/package";

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  tour: Tour;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public apiProvider: ApiProvider) {
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
}
