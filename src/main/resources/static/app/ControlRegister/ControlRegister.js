'use strict';

angular.module('myApp.ControlRegister', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegister', {
    templateUrl: 'ControlRegister/ControlRegister.html',
    controller: 'ControlRegisterCtrl'
  });
}])

.controller('ControlRegisterCtrl', ['$rootScope', '$scope', 'persons','person','$http','$resource', '$location', function ($rootScope, $scope, persons,person, $http, $resource, $location) {
        $scope.date=null;
        $scope.siPresuare=null;
        $scope.diPresuare=null;
        $scope.cholesterol=null;
        $scope.cardiacRythm=null;

        $scope.saveRegister= function(){
            $scope.diagnostic={"systolicPressure":$scope.siPresuare,"diastolicPressure":$scope.diPresuare,"bloodCholesterol":$scope.cholesterol,"heartRate":$scope.cardiacRythm,"date":$scope.date};
            person.get({personId:""+$rootScope.RegisteredIdPerson})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personT=value;
                        $scope.personT.diagnostics.push($scope.diagnostic);
                        persons.update($scope.personT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.personT.diagnostics);
                            },
                            //error
                            function( error ){
                                console.log("El paciente no se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        console.log("El paciente no se encuentra registrado");
                    }
            );
            $location.path("HomePatient");
        };
}]);