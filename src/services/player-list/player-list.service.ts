import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";


@Injectable()

export class PlayerListService {

    basePath: String = "registrations";

    private playerListRef = this.db.list('registrations');

    constructor(private db: AngularFireDatabase) {}

    getPlayerList() {
        return this.playerListRef;
    }
}