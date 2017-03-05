'use strict';

angular.module('myApp.HomeDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomeDoctor', {
    templateUrl: 'HomeDoctor/HomeDoctor.html',
    controller: 'HomeDoctorCtrl'
  });
}])

.controller('HomeDoctorCtrl', ['$rootScope', '$scope', 'person','$location', function ($rootScope, $scope, person,$location) {

    $rootScope.FindID=false;
    $rootScope.patientId=null;
    $scope.found=false;
    $scope.pId=null;
    $rootScope.patientId=$scope.pId;
    $scope.consultar=function(){
        $rootScope.patientId=$scope.pId;
        person.get({personId:""+$rootScope.patientId})
        .$promise.then(
                //success
                function( value ){
                    $rootScope.FindID=true;
                    $scope.person=value;
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );

    };
    $scope.NuevaConsulta=function(){
        $rootScope.FindID=false;
    };

}]);
