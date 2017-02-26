'use strict';

angular.module('myApp.ControlView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlView', {
    templateUrl: 'ControlView/ControlView.html',
    controller: 'ControlViewCtrl'
  });
}])

.controller('ControlViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {
    person.get({personId:""+$rootScope.idPerson})
    .$promise.then(
            //success
            function( value ){
                $scope.person=value;
                $scope.diagnostics=$scope.person.diagnostics;
                console.info(value);
            },
            //error
            function( error ){
                alert("Error");
            }
    );
}]);
