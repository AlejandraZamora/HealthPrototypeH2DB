'use strict';

angular.module('myApp.PatientChoiceView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientChoiceView', {
    templateUrl: 'PatientChoiceView/PatientChoiceView.html',
    controller: 'PatientChoiceViewCtrl'
  });
}])

.controller('PatientChoiceViewCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
     $scope.continuePR=function(){
         $location.path("PatientAutorization");
     }
     $scope.continuePL=function(){
         $location.path("LoginView");
     }
}]);