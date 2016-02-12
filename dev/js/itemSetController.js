var app = angular.module('riftwalkerApp');

app.controller('ItemSetController', [ 'DataService', '$scope', '$http',function( DataService, $scope, $http ) {

  var getItems = function() {
      $http({
          method: 'GET',
          dataType: 'jsonp',
          // url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region
          url: 'https://global.api.pvp.net/api/lol/static-data/' + DataService.getRegion().region.toLowerCase() + '/v1.2/item?itemListData=all&api_key='
      }).then(function successCallback(response) {
        $scope.items = response.data;
        $scope.itemData = response.data.data;
        $scope.itemBasic = response.data.basic;
        $scope.itemTree = response.data.tree;
        $scope.itemGroups = response.data.groups;


      }, function errorCallback(response) {
          console.log(response);
      });
  };

  $scope.getItemImage = function(imageFullName) {
      return itemImageUrl + imageFullName;
  };

  var itemImageUrl = "http://ddragon.leagueoflegends.com/cdn/6.2.1/img/item/";
  getItems();

  $scope.selectTreeHeader = function(treeHeader) {
    if ($scope.treeHeadersSelected.indexOf(treeHeader) >= 0) {
      $scope.treeHeadersSelected.splice($scope.treeHeadersSelected.indexOf(treeHeader), 1);
    } else {
      $scope.treeHeadersSelected.push(treeHeader);
    }
  }

  $scope.filterSORTINDEX = function(value) {
    return value != '_SORTINDEX';
  }

  $scope.selectedRegion = DataService.getRegion();

  $scope.items = getItems();
  $scope.itemData;
  $scope.itemBasic;
  $scope.itemTree;
  $scope.itemGroups;

  $scope.treeHeadersSelected = [];
}])
.directive('itemsetForm', function () {
  return {
    restrict: 'E',
    templateUrl: 'itemset.html'
  }
});
