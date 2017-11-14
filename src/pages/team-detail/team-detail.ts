import { Player } from './../../model/player.model';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Team } from '../../model/team.model';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  team : any;
  id:any;
  listPlayer : AngularFirestoreCollection<Player>;
  players : any;
  // playerList : AngularFirestoreCollection<Player>;
  // players : Observable<any>;
  // teamId : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs:AngularFirestore) {
  }

  ionViewWillLoad() {
    this.id = this.navParams.get('id');
    this.team = this.navParams.get('data');
    // this.listPlayer = this.afs.collection('teams').doc(`LA1`).collection('players');
    this.listPlayer = this.afs.collection('teams/'+this.id+'/players');
    this.players = this.listPlayer.valueChanges();
    
    
    console.log(this.players);

    // this.playerList = this.afs.collection('teams');
    // this.players = this.playerList.snapshotChanges()
    //   .map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as Player;
    //       const id = a.payload.doc.id;
    //       this.teamId = id;
    //       return { id,  data};
    //     })
    //   })
    
  }
}
