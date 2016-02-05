import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {GameMode} from './game-mode';

@Component({
  selector: 'game-modes',
  templateUrl: 'app/game-modes/game-modes.component.html'
})
export class GameModesComponent implements OnInit{
  public selectedGameMode : GameMode;

  public gameModes : GameMode[] = [
        { label: 'Any', mode: 'any' },
        { label: 'Classic', mode: 'CLASSIC' },
        { label: 'All Random All Mid (ARAM)', mode: 'ARAM' },
        { label: 'Dominion', mode: 'ODIN'}
  ];

  ngOnInit(){
    this.selectedGameMode = this.gameModes[0];
  }

  onSelect(gameMode : GameMode) {
    this.selectedGameMode = gameMode;
  }
}
