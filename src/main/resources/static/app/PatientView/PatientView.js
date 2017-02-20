'use strict';

angular.module('myApp.PatientView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientView', {
    templateUrl: 'PatientView/PatientView.html',
    controller: 'PatientViewCtrl'
  });
}])

.controller('PatientViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {

    $scope.person=$rootScope.person;

}]);
