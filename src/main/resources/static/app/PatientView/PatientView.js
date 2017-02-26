'use strict';

angular.module('myApp.PatientView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientView', {
    templateUrl: 'PatientView/PatientView.html',
    controller: 'PatientViewCtrl'
  });
}])

.controller('PatientViewCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

    $scope.person=$rootScope.person;

    $scope.continueCR=function(){
        $location.path("ControlRegister");
    };

    $scope.continueCV=function(){
        $location.path("ControlView");
    };
}]);
