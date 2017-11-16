import { Matches } from './../../model/matches.model';
import { TeamList } from './../../model/teamlist.model';
import { Group } from './../../model/group.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Team } from './../../model/team.model';
import { PlayerListService } from './../../services/player-list/player-list.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-standing',
  templateUrl: 'standing.html'
})
export class StandingPage {

  groups: AngularFirestoreCollection<Group>;
  group: any;
  groupID: any;

  teamList: AngularFirestoreCollection<any>;
  teams: any;

  matchList : AngularFirestoreCollection<Matches>;


  standing: String = "man";

  constructor(private afs: AngularFirestore){}

  ngOnInit(){
    this.groups = this.afs.collection('groups');
    this.group = this.groups.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Group;
          const id = a.payload.doc.id;
          // let x = [{name:"testing 1"},{name:"testing 2"}];
          let teamList = this.afs.collection('groups/'+id+"/team_list", ref => {
            return ref.orderBy('points', 'desc')
          }).snapshotChanges()
            .map(actions => {
              return actions.map(b => {
                const data = b.payload.doc.data() as TeamList;
                const id = b.payload.doc.id;
                
                return { id, data};

              })
            })
          return { id, data, teamList};
        })
      })

      // .forEach(x=>{
      //   x.forEach(y=>{
      //     console.log(y.id);
          
      //   })
        
      // })

// console.log(this.group);

    // this.teamList = this.afs.collection('groups/'+this.groupID+'team_list');
    // this.teams = this.groups.snapshotChanges()
    //   .map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as TeamList;
    //       const id = a.payload.doc.id;
    //       return { id, data};
    //     })
    //   })
  }
}
