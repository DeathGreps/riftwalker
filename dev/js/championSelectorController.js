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
            url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region
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
}]);
