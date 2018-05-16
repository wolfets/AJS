'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {

  $scope.create = function () {
      $scope.lignes = [];
      $http.get( "__LOTO_console7.json")
          .success(function(data, status){
            $scope.lignes = data;
            console.log($scope.lignes);
          })
          .error(function () {
             alert('err : ')
          });
  };

});