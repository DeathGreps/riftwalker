var app = angular.module('riftwalkerApp');

app.controller('ItemSetController', [ 'DataService', '$scope', '$http',function( DataService, $scope, $http ) {

}])
.directive('itemsetForm', function () {
  return {
    restrict: 'E',
    templateUrl: 'itemset.html'
  }
});
