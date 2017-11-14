import { Component } from '@angular/core';

import { GamesPage } from '../games/games';
import { TeamPage } from '../team/team';
import { HomePage } from '../home/home';
import { StandingPage } from '../standing/standing';
import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GamesPage;
  tab3Root = TeamPage;
  tab4Root = StandingPage;

  constructor() {

  }
}
