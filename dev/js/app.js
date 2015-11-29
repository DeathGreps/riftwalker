var riftApp = angular.module('riftwalkerApp', []);

riftApp.controller('regSelCtrl', ['$scope',function() {
    $scope.wow = "hllo world. this works now";
    this.test = "hello world!";
    this.regions = ['hello','hellooooo'];
    this.regions2 = {
        abc:'abc',
        def:'def'
    };
}]);

riftApp.controller('ngAppDemoController', function($scope) {
  $scope.a = 1;
  $scope.b = 2;
});