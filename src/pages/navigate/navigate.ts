import {Component, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, NavParams, ViewController} from 'ionic-angular';
import {Tour} from "../../app/tour";
import {ApiProvider} from "../../providers/api/api";
import {Product} from "../../app/product";
import {Package} from "../../app/package";
import {PackageProductQuantity} from "../../app/packageProductQuantity";

/**
 * Generated class for the NavigatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigate',
  templateUrl: 'navigate.html',
})
export class NavigatePage {

  @ViewChild(Content) content: Content;
  tour: Tour;
  items: Array<PackageProductQuantity>;

  constructor(public alertCtrl: AlertController, public viewCtrl: ViewController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.items = [];
    this.tour = this.navParams.get('item');
    this.getNavigationInfo();
  }

  ionViewDidLoad() {

  }

  getNavigationInfo() {
    this.apiProvider.get('navigate/' + this.tour.id)
      .then(data => {
        Object.keys(data).forEach(key => {
          let pack = new Package(parseInt(data[key].COLIS_ID), parseInt(data[key].POIDSMAX), parseInt(data[key].VOLUMEMAX), parseInt(data[key].COMMANDE_ID), this.tour);
          let p = new Product(parseInt(data[key].PRODUIT_ID), parseInt(data[key].POIDS), parseInt(data[key].VOLUME), parseInt(data[key].X), parseInt(data[key].Y));
          this.items.push(new PackageProductQuantity(pack, p, parseInt(data[key].QUANTITE)));
        });
      });
  }

  itemTapped(event, item, index) {
    let i = this.items.length - 1;
    if (item.tourStatus === 0) {
      if (index === 0 || this.items[index - 1].tourStatus === 1) {
        item.tourStatus = 1;
        if (index === i) {
          this.showEndAlert(item);
        } else {
          this.scrollTo(index);
        }
      }
    } else {
      let etape = index+1;
      const alert = this.alertCtrl.create({
      title: 'Revenir à l\'étape ' + etape + ' ?',
      buttons: [
        {
          text: 'Non'
        },
        {
          text: 'Oui',
          handler: () => {
            for (i; i >= index; i--) {
              this.items[i].tourStatus = 0;
            }
            this.scrollTo(index);
          }
        }
      ]
    });
      alert.present();
    }
  }

  endTour() {
    this.apiProvider.post('updateTour/' + this.tour.id).then(data => {
        this.viewCtrl.dismiss();
    });
  }

  showEndAlert(lastItem) {
    const alert = this.alertCtrl.create({
      title: 'Terminer la tournée ' + this.tour.id + ' ?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            lastItem.tourStatus = 0;
            alert.dismiss();
          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.endTour();
          }
        }
      ]
    });
    alert.present();
  }

  scrollTo(element:string) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset, 300)
  }

}
