import { Team } from './../../model/team.model';
import { Matches } from './../../model/matches.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage implements OnInit{

  day: String = "day1";

  matchesList: AngularFirestoreCollection<Matches>;
  matches: any;
  matchID: String;

  teamList: AngularFirestoreCollection<Matches>;
  teams: any;
  teamID: String;

  testID : String = "LA2";
  gameCount : number = 0;

  constructor(public navCtrl: NavController, private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.matchesList = this.afs.collection('matches', ref=> {
      return ref.orderBy('match_no')
    });
    this.matches = this.matchesList.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Matches;
          const id = a.payload.doc.id;

          
          return { id, data };
        })
      })

    
  }



}
