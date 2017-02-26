'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
     $scope.continueP=function(){
         $location.path("PatientChoiceView");
     }
     $scope.continueD=function(){
              $location.path("DoctorView");
     }
     $scope.continueI=function(){
              $location.path("InvestigatorView");
     }
}]);