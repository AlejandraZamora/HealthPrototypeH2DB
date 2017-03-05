'use strict';

angular.module('myApp.RegisterDoctorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterDoctorView', {
    templateUrl: 'RegisterDoctorView/RegisterDoctorView.html',
    controller: 'RegisterDoctorViewCtrl'
  });
}])

.controller('RegisterDoctorViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {
    $scope.foundRD=$rootScope.FindID;
    person.get({personId:""+$rootScope.patientId})
    .$promise.then(
            //success
            function( value ){
                $scope.person=value;
                $scope.diagnostics=$scope.person.diagnostics;
                console.info(value);
            },
            //error
            function( error ){
                console.log("Error");
            }
    );
}]);
