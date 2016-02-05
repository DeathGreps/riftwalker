import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Region} from './region';

@Component({
  selector: 'regions',
  templateUrl: 'app/regions/regions.component.html'
})
export class RegionsComponent implements OnInit {
  public selectedRegion : Region;

  public regions : Region[] = [
    { region: 'NA', platformID: 'NA1', host: 'na.api.pvp.net'},
    { region: 'BR', platformID: 'BR1', host: 'br.api.pvp.net' },
    { region:'EUNE', platformID: 'EUN1', host: 'eune.api.pvp.net'},
    { region: 'EUW', platformID: 'EUW1', host: 'euw.api.pvp.net'},
    { region: 'KR', platformID: 'KR', host: 'kr.api.pvp.net'},
    { region: 'LAN', platformID: 'LA1', host: 'lan.api.pvp.net'},
    { region: 'LAS', platformID: 'LA2', host: 'las.api.pvp.net'},
    { region: 'OCE', platformID: 'OC1', host: 'oce.api.pvp.net'},
    { region: 'TR', platformID: 'TR1', host: 'tr.api.pvp.net'},
    { region: 'RU', platformID: 'RU', host: 'ru.api.pvp.net'},
    { region: 'PBE', platformID: 'PBE', host: 'pbe.api.pvp.net'},
    { region: 'Global', platformID: '', host: 'global.api.pvp.net'}
  ];

  ngOnInit() {
    this.selectedRegion = this.regions[0];
  }

  selectRegion(region : Region) {
    this.selectedRegion = region;
  }

}
