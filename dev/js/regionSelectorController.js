var app = angular.module('riftwalkerApp');

app.controller('RegionSelectorController', ['DataService', '$scope', function (DataService, $scope) {



    var regions = [
        { region: 'BR', platformID: 'BR1', host: 'br.api.pvp.net' },
        { region:'EUNE', platformID: 'EUN1', host: 'eune.api.pvp.net'},
        { region: 'EUW', platformID: 'EUW1', host: 'euw.api.pvp.net'},
        { region: 'KR', platformID: 'KR', host: 'kr.api.pvp.net'},
        { region: 'LAN', platformID: 'LA1', host: 'lan.api.pvp.net'},
        { region: 'LAS', platformID: 'LA2', host: 'las.api.pvp.net'},
        { region: 'NA', platformID: 'NA1', host: 'na.api.pvp.net'},
        { region: 'OCE', platformID: 'OC1', host: 'oce.api.pvp.net'},
        { region: 'TR', platformID: 'TR1', host: 'tr.api.pvp.net'},
        { region: 'RU', platformID: 'RU', host: 'ru.api.pvp.net'},
        { region: 'PBE', platformID: 'PBE', host: 'pbe.api.pvp.net'},
        { region: 'Global', host: 'global.api.pvp.net'}
    ];

    $scope.regions = regions;
    $scope.selectedRegion = regions[6];

    $scope.$watch('selectedRegion', function (newValue, oldValue) {
        if (newValue !== oldValue) DataService.setRegion(newValue);
    });
}])
.directive('regionSelector', function () {
  return {
    restrict: 'E',
    templateUrl: 'region.html'
  }
});
