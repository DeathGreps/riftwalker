var app = angular.module('riftwalkerApp');

app.controller('ChampionSelectorController', [ 'DataService', '$scope', '$http', '$mdSidenav', function( DataService, $scope, $http, $mdSidenav ) {

    var getChampionData = function(selRegion) {
        $http({
            method: 'GET',
            dataType: 'jsonp',
            // url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region
            url: 'https://global.api.pvp.net/api/lol/static-data/' + DataService.getRegion().region.toLowerCase() + '/v1.2/champion?champData=all&api_key='
        }).then(function successCallback(response) {

            $scope.championData = response.data.data;
            $scope.championKeys = response.data.keys;

        }, function errorCallback(response) {
            console.log(response);
        });
    };

    $scope.changedChampionSelection = function(champion) {
        $scope.selectedChampionData = $scope.championData[champion.key];
        DataService.setChampion($scope.selectedChampionData);
    };

    $scope.getChampionImage = function(imageFullName) {
        return $scope.championImageUrl + imageFullName;
    };

    $scope.selectedRegion = DataService.getRegion();
    $scope.championImageUrl = "http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/"
    $scope.championData = getChampionData();
    $scope.championKeys = '';
    $scope.selectedChampion = '';
    $scope.selectedChampionData = {};
    $scope.championLevel = 1;

    $scope.toggleList = function() {
        $mdSidenav('left').toggle();
    }

    $scope.$watch(
        function () { return DataService.getRegion(); },
        function (newValue, oldValue) {
            if (newValue !== oldValue)
                $scope.selectedRegion = newValue;
        }
    );
}])
.directive('championSelector', function () {
  return {
    restrict: 'E',
    templateUrl: 'champion.html'
  }
});
