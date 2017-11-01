import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

/**
 * Generated class for the VenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venue',
  templateUrl: 'venue.html',
})
export class VenuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuePage');
  }

  navigate(address) {
    this.launchNavigator.navigate(address);
    console.log(address);
  }

}
