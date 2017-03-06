'use strict';

angular.module('myApp.UpdatePatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/UpdatePatient', {
    templateUrl: 'UpdatePatient/UpdatePatient.html',
    controller: 'UpdatePatientCtrl'
  });
}])

.controller('UpdatePatientCtrl', ['$rootScope', '$scope','person', 'persons','$http','$resource', '$location', function ($rootScope, $scope, person, persons, $http, $resource, $location) {

        $scope.address=null;
        $scope.zip=null;
        $scope.city=null;
        $rootScope.nameP=null;

        $scope.updatePerson= function(){
            person.get({personId:""+$rootScope.idPerson})
                    .$promise.then(
                            //success
                            function( value ){
                                $scope.personT=value;
                                if($scope.address!=null){
                                    $scope.personT.address.street=$scope.address;
                                }
                                if($scope.zip!=null){
                                    $scope.personT.address.zip=$scope.zip;
                                }
                                if($scope.city!=null){
                                    $scope.personT.address.city=$scope.city;
                                }
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
                                alert("El paciente no se encuentra registrado");
                            }
                    );
            $location.path("HomePatient");

        };

}]);