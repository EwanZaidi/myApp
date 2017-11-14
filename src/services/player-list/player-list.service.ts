import { Observable } from 'rxjs/Observable';
import { Team } from './../../model/team.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';


@Injectable()

export class PlayerListService {

    basePath: String = "registrations";

    private playerListRef = this.db.list('registrations');

    teamList: AngularFirestoreCollection<Team>;
    team: Observable<Team[]>;

    constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {}

    getPlayerList() {
        //return this.playerListRef;
        this.teamList = this.afs.collection('teams');
        this.team = this.teamList.valueChanges();
    }

    
}