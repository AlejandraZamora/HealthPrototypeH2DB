'use strict';

angular.module('myApp.HomeInvestigator', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomeInvestigator', {
    templateUrl: 'HomeInvestigator/HomeInvestigator.html',
    controller: 'HomeInvestigatorCtrl'
  });
}])

.controller('HomeInvestigatorCtrl', ['$rootScope', '$scope', 'persons', function ($rootScope, $scope, persons) {

}]);
