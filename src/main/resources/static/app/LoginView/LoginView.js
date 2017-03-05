'use strict';

angular.module('myApp.LoginView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/LoginView', {
    templateUrl: 'LoginView/LoginView.html',
    controller: 'LoginViewCtrl'
  });
}])

.controller('LoginViewCtrl', ['$rootScope', '$scope', 'person','persons','$http','$resource', '$location', function ($rootScope, $scope, person, persons, $http, $resource, $location) {
        $scope.personId=null;

        $scope.person=$rootScope.person;
        $scope.accept=function(){
            person.get({personId:""+$scope.personId})
                .$promise.then(
                        //success
                        function( value ){
                            $rootScope.person=value;
                            $rootScope.idPerson=$scope.personId;
                            $location.path("HomePatient");
                        },
                        //error
                        function( error ){
                            alert("El paciente no se encuentra registrado");
                        }
                );
        };
}]);