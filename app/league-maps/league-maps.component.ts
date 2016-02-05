import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {LeagueMap} from './league-map';

@Component({
  selector: 'league-maps',
  templateUrl: 'app/league-maps/league-maps.component.html'
})
export class LeagueMapsComponent implements OnInit{
  public selectedLeagueMap : LeagueMap;

  public leagueMaps : LeagueMap[] = [
    { shortName:"any", label: "Any" },
    { shortName: "SR", label: "Sumonner's Rift" },
    { shortName: "HA", label: "Howling Abyss" },
    { shortName: "TT", label: "Crystal Scar" }
  ];

  ngOnInit() {
    this.selectedLeagueMap = this.leagueMaps[1];
  }

  onSelect(leagueMap : LeagueMap) {
    this.selectedLeagueMap = leagueMap;
  }
}
