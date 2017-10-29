import { PlayerListService } from './../../services/player-list/player-list.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../model/player.model';

@Component({
  selector: 'page-standing',
  templateUrl: 'standing.html'
})
export class StandingPage {

  standing: String = "man";
  playerList$: Observable<Player[]>;

  constructor(public navCtrl: NavController, private player: PlayerListService) {
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
