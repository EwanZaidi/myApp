import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../model/player.model';
import { PlayerListService } from './../../services/player-list/player-list.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  standing: String = "man";
  playerList$: Observable<Player[]>;

  constructor(public navCtrl: NavController, private player: PlayerListService, public navParams: NavParams) {
      this.playerList$ = this.player
      .getPlayerList() //DB LIST
      .snapshotChanges() // Key and Value
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
  }

}
