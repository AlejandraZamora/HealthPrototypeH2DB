'use strict';

angular.module('myApp.DoctorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/DoctorView', {
    templateUrl: 'DoctorView/DoctorView.html',
    controller: 'DoctorViewCtrl'
  });
}])

.controller('DoctorViewCtrl', ['$rootScope', '$scope', 'person','$location', function ($rootScope, $scope, person,$location) {

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
                    $scope.comments=$scope.person.comments;
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );

    };
    $scope.continueCR=function(){
        $rootScope.pId=$scope.patientId;
        $location.path("CommentRegister");
    };

}]);
