var app = angular.module('riftwalkerApp');

app.controller('ItemSetController', [ 'DataService', '$scope', '$http', '$filter', function( DataService, $scope, $http, $filter) {

  var getItems = function() {
      $http({
          method: 'GET',
          dataType: 'jsonp',
          // url: '/api/staticdata/' + DataService.getRegion().host + '/' + DataService.getRegion().region
          url: 'https://global.api.pvp.net/api/lol/static-data/'
            + DataService.getRegion().region.toLowerCase()
            + '/v1.2/item?itemListData=all&api_key='
      }).then(function successCallback(response) {
        $scope.items = response.data;
        $scope.itemData = response.data.data;
        $scope.filteredItemData = response.data.data;
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

  var itemImageUrl = "http://ddragon.leagueoflegends.com/cdn/6.3.1/img/item/";

  $scope.treeTagsUpdated = function(TagToDelete) {
    if(TagToDelete) {
      $scope.treeTagsSelected.splice($scope.treeTagsSelected.indexOf(TagToDelete), 1);
    }
    console.log($scope.treeTagsSelected);
    if($scope.treeTagsSelected.length == 0) {
      $scope.filteredItemData = $scope.itemData;
    } else {
      $scope.filteredItemData = {};
      for(var itemId in $scope.itemData) {
        var itemObject = $scope.itemData[itemId]
        var includeThisItem = true;
        if(typeof(itemObject.tags) == 'undefined')
          continue;
        for(var i in $scope.treeTagsSelected) {
          var tempTag = $filter('lowercase')($scope.treeTagsSelected[i]);
          var tagIsInItem = false;
          for(var j in itemObject.tags) {
            if (tempTag == ($filter('lowercase')(itemObject.tags[j]))) {
              tagIsInItem = true;
              break;
            }
          }
          if(!tagIsInItem) {
            includeThisItem = false;
            break;
          }
        }
        if(includeThisItem) {
          $scope.filteredItemData[itemId] = $scope.itemData[itemId];
        }
      }
    }
  }

  $scope.selectTreeTag = function(treeHeader) {
    if ($scope.treeTagsSelected.indexOf(treeHeader) >= 0) {
      $scope.treeTagsSelected.splice($scope.treeTagsSelected.indexOf(treeHeader), 1);
    } else {
      $scope.treeTagsSelected.push(treeHeader);
    }
  }

  $scope.filterSORTINDEX = function(value) {
    return value != '_SORTINDEX';
  }

  $scope.selectedRegion = DataService.getRegion();

  $scope.items = getItems();
  $scope.itemData;
  $scope.filteredItemData;
  $scope.itemBasic;
  $scope.itemTree;
  $scope.itemGroups;

  $scope.treeTagsSelected = [];
}])
.directive('itemsetForm', function () {
  return {
    restrict: 'E',
    templateUrl: 'itemset.html'
  }
});
