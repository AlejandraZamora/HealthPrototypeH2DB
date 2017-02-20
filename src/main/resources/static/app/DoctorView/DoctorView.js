'use strict';

angular.module('myApp.DoctorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/DoctorView', {
    templateUrl: 'DoctorView/DoctorView.html',
    controller: 'DoctorViewCtrl'
  });
}])

.controller('DoctorViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {

    $scope.patientName=null;
    $scope.found=false;
    $scope.consultar=function(){
        $scope.busy=true;
        person.get({personName:""+$scope.patientName})
        .$promise.then(
                //success
                function( value ){
                    $scope.found=true;
                    $scope.person=value;
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );

    };

}]);
