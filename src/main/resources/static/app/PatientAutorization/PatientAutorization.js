'use strict';

angular.module('myApp.PatientAutorization', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientAutorization', {
    templateUrl: 'PatientAutorization/PatientAutorization.html',
    controller: 'PatientAutorizationCtrl'
  });
}])

.controller('PatientAutorizationCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.continue=function(){
        $location.path("PatientRegister");
    }

}]);