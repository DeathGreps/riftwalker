import {Component, OnInit} from 'angular2/core';
import {ChampionDto, ChampionListDto} from './all-champions';
import {ChampionService} from '../shared/champion.service';

@Component({
  selector: 'champion-list',
  templateUrl: './champion-list.component.html',
})
export class ChampionListComponent implements OnInit {

  champions: ChampionListDto;

  errorMessage: string;

  constructor(private _championService : ChampionService) { }

  ngOnInit() {
    this._championService.getChampions()
      .subscribe(
        champions => this.champions = champions,
        error => this.errorMessage = <any>error);
  }
}
