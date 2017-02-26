'use strict';

angular.module('myApp.PatientRegister', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientRegister', {
    templateUrl: 'PatientRegister/PatientRegister.html',
    controller: 'PatientRegisterCtrl'
  });
}])

.controller('PatientRegisterCtrl', ['$rootScope', '$scope', 'persons','$http','$resource', '$location', function ($rootScope, $scope, persons, $http, $resource, $location) {
        $scope.id=null;
        $scope.name=null;
        $scope.lastName=null;
        $scope.address=null;
        $scope.zip=null;
        $scope.city=null;
        $rootScope.nameP=null;

        $scope.savePerson= function(){
            $rootScope.idPerson=$scope.id;
            $rootScope.person={"id":$scope.id,"name":$scope.lastName, "firstName":$scope.name, "address":{"street":$scope.address,"zip":""+$scope.zip,"city":$scope.city},"diagnostics":[],"comments":[]};
            persons.save($scope.person,function(){
                console.info("Person saved   "+ $rootScope.person.name);
            });
            $location.path("PatientView");

        };

}]);