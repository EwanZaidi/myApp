import { TeamDetailPage } from './../team-detail/team-detail';
import { OnInit} from '@angular/core';
import { Team } from './../../model/team.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})
export class TeamPage implements OnInit {

  standing: String = "man";
  teamList: AngularFirestoreCollection<Team>;
  teams : any;
  // teams: Observable<Team[]>;
  team: any;
  teamID: String;
  teamDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ngOnInit (){
    this.teamList = this.afs.collection('teams');
    

    // this.teams = this.teamList.valueChanges();
    this.teams = this.teamList.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Team;
          const id = a.payload.doc.id;
          return {id, data};
        })
      })
  }

  teamDetails(teamID){      
    this.navCtrl.push(TeamDetailPage, {id:teamID.id,data:teamID.data});
  }
  
}
