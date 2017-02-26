'use strict';

angular.module('myApp.DoctorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/DoctorView', {
    templateUrl: 'DoctorView/DoctorView.html',
    controller: 'DoctorViewCtrl'
  });
}])

.controller('DoctorViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {

    $scope.patientId=null;
    $scope.found=false;
    $scope.consultar=function(){
        $scope.busy=true;
        person.get({personId:""+$scope.patientId})
        .$promise.then(
                //success
                function( value ){
                    $scope.found=true;
                    $scope.person=value;
                    $scope.diagnostics=$scope.person.diagnostics;
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );

    };

}]);
