var app = angular.module('riftwalkerApp');

app.controller('ChampionSelectorController', [ 'DataService', '$scope', '$http',function( DataService, $scope, $http ) {

    $scope.$watch(
        function () { return DataService.getRegion(); },
        function (newValue, oldValue) {
            if (newValue !== oldValue)
                $scope.selectedRegion = newValue;
        }
    );

    var getChampionData = function(selRegion) {
        $http({
            method: 'GET',
            dataType: 'jsonp',
            // url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region
            url: 'https://global.api.pvp.net/api/lol/static-data/' + DataService.getRegion().region.toLowerCase() + '/v1.2/champion?champData=all&api_key=8154a173-96ac-4d43-9c36-7cbc0caff087'
        }).then(function successCallback(response) {

            $scope.championData = response.data;
            $scope.championKeys = response.data.keys;

        }, function errorCallback(response) {
            console.log(response);
        });
    };

    $scope.changedChampionSelection = function(championName) {
        $scope.selectedChampionData = $scope.championData.data[championName];
    };

    $scope.getChampionImage = function(imageFullName) {
        return "http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/" + imageFullName;
    };

    $scope.selectedRegion = DataService.getRegion();
    $scope.championImageUrl = "http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/"
    $scope.championData = getChampionData();
    $scope.championKeys = '';
    $scope.selectedChampion = '';
    $scope.selectedChampionData = {};
    $scope.championLevel = 1;
}])
.directive('championSelector', function () {
  return {
    restrict: 'E',
    templateUrl: 'champion.html'
  }
});
