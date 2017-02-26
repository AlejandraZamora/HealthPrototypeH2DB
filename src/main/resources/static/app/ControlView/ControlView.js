'use strict';

angular.module('myApp.ControlView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlView', {
    templateUrl: 'ControlView/ControlView.html',
    controller: 'ControlViewCtrl'
  });
}])

.controller('ControlViewCtrl', ['$rootScope', '$scope', 'diagnostics', function ($rootScope, $scope, diagnostics) {
    $rootScope.person.id
    diagnostics.get({personId:""+1234})
    .$promise.then(
            //success
            function( value ){
                $scope.diagnostics=value;
                console.info(value);
            },
            //error
            function( error ){
                alert("Error");
            }
    );
}]);
