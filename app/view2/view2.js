'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .controller('View22Ctrl',  function($scope, $http) {

        $scope.create = function() { // THROWS ERROR ON THIS INSTANCE OF $SCOPE
            $scope.voyages= [];
            $http.get("voyages.json").
            success(function(data, status) {
                $scope.voyages = data; //JSON.parse(data);
                console.log($scope.voyages);
            }).
            error(function(data, status) {
                document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
            });
        };
        $scope.create();
    })

//-----minifié
.controller('View2Ctrl',  ['$scope', '$http', function($scope, $http) {
    $scope.create = function() { // THROWS ERROR ON THIS INSTANCE OF $SCOPE
        $scope.voyages= [];
        $http.get("voyages.json").
        success(function(data, status) {
            $scope.voyages = data; //JSON.parse(data);
            console.log($scope.voyages);
        }).
        error(function(data, status) {
            document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
        });
    };
    //$scope.create();

}]);