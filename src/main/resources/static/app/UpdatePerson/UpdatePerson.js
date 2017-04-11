'use strict';

angular.module('myApp.UpdatePerson', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/UpdatePerson', {
    templateUrl: 'UpdatePerson/UpdatePerson.html',
    controller: 'UpdatePersonCtrl'
  });
}])

.controller('UpdatePersonCtrl', ['$rootScope', '$scope','person', 'persons','$http','$resource', '$location', function ($rootScope, $scope, person, persons, $http, $resource, $location) {

        $scope.address=null;
        $scope.zip=null;
        $scope.city=null;
        $rootScope.nameP=null;
        $scope.role=null;

        $scope.updatePerson= function(){
            person.get({personId:""+$rootScope.RegisteredIdPerson})
                    .$promise.then(
                            //success
                            function( value ){
                                $scope.personT=value;
                                $scope.role=$scope.personT.role;
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
                                        console.log("Person update"+ $scope.personT.diagnostics);
                                    },
                                    //error
                                    function( error ){
                                        console.log("El usuario no se pudo actualizar");
                                    }

                                );
                            },
                            //error
                            function( error ){
                                console.log("El usuario no se encuentra registrado");
                            }
                    );
            if($scope.role.equals("Paciente")){
                $location.path("HomePatient");
            }else if($scope.role.equals("Doctor")){
                $location.path("HomeDoctor");
            }else if($scope.role.equals("Investigador")){
                $location.path("HomeInvestigator");
            }
        };

}]);