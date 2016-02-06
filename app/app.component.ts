import {Component, OnInit} from 'angular2/core';
//import {HTTP_PROVIDERS} from 'angular2/http';

import {LeagueMapsComponent} from './league-maps/league-maps.component';
import {GameModesComponent} from './game-modes/game-modes.component';
import {RegionsComponent} from './regions/regions.component';

// import {ChampionListComponent} from './champions/champion-list.component';
// import {ChampionService} from './shared/champion.service';

@Component({
  selector: 'riftwalker',
  template: `
  <h1>{{title}}</h1>
  <div *ngIf="apiKey">
    apiKey = {{apiKey}}
  </div>
  <league-maps></league-maps>
  <game-modes></game-modes>
  <regions></regions>
  <champion-list></champion-list>
  `,
  directives: [LeagueMapsComponent, GameModesComponent, RegionsComponent],
  providers: [
  //  HTTP_PROVIDERS,
    // ChampionService
  ]
})
export class AppComponent implements OnInit {
  public title = 'RiftWalker';

  ngOnInit() {
  }
}
