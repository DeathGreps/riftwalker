import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {ChampionDto, ChampionListDto} from '../champions/all-champions';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChampionService {
  constructor (private http: Http) {}

  private _championsUrl = '/api/staticdata/na.api.pvp.net/na';

  getChampions() {
    return this.http.get(this._championsUrl)
      .map(res => <ChampionListDto> res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

// url: 'https://' + DataService.getRegion().host + '/api/lol/static-data/' + DataService.getRegion().region + '/v1.2/champion?champData=all&api_key=<YOUR API KEY HERE>'


  // url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region



// $scope.getChampionImage = function(imageFullName) {
//     return "http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/" + imageFullName;
// };
//
// $scope.selectedRegion = DataService.getRegion();
// $scope.championImageUrl = "http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/"
