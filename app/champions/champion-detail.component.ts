import {Component} from 'angular2/core';
import {Champion} from './champion';

@Component({
  selector: 'champion-detail',
  template: `
  <div *ngIf="champion">
  <h2>{{champion.id}} details!</h2>
    <div><label>id: </label>{{champion.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="champion.active"
      placeholder="Champion Name">
    </div>
  </div>`,
  inputs:['champion']
})
export class ChampionDetailComponent {
  public champion : Champion;
}
