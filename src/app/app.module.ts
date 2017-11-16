import { GamesPage } from './../pages/games/games';
import { TeamDetailPage } from './../pages/team-detail/team-detail';
import { PlayerListService } from './../services/player-list/player-list.service';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TeamPage } from '../pages/team/team';
import { HomePage } from '../pages/home/home';
import { StandingPage } from '../pages/standing/standing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    GamesPage,
    TeamPage,
    HomePage,
    StandingPage,
    TeamDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamesPage,
    TeamPage,
    HomePage,
    StandingPage,
    TeamDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerListService,
    LaunchNavigator,
  ]
})
export class AppModule {}
