'use strict';

angular.module('myApp.Register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Register', {
    templateUrl: 'Register/Register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$rootScope', '$scope', 'persons','$http','$resource', '$location', function ($rootScope, $scope, persons, $http, $resource, $location) {

        $scope.id=null;
        $scope.password=null;
        $scope.name=null;
        $scope.lastName=null;
        $scope.address=null;
        $scope.zip=null;
        $scope.city=null;

        $scope.selectmenu=document.getElementById("roleS");
        $scope.selectmenu.onchange=function(){ //run some code when "onchange" event fires
            $scope.roleSelected = this.options[this.selectedIndex].text;
            console.log("rolll "+$scope.roleSelected);
            console.log("comparación "+$scope.roleSelected+ " escrita Paciente"+ "valor ");
            console.log($scope.roleSelected=="Paciente");
        }
        $scope.savePerson= function(){
            $rootScope.registeredIdPerson=$scope.id;
            $rootScope.person={"id":$scope.id, "password":$scope.password, "name":$scope.lastName, "firstName":$scope.name, "address":{"street":$scope.address,"zip":""+$scope.zip,"city":$scope.city},"diagnostics":[],"comments":[], "role":$scope.roleSelected};
            persons.save($scope.person,function(){
                console.info("Person saved   "+ $rootScope.person.name);
            });
            if($scope.roleSelected=="Paciente"){
                $location.path("HomePatient");
            }
            if($scope.roleSelected=="Doctor"){
                $location.path("HomeDoctor");
            }
            if($scope.roleSelected=="Investigador"){
                $location.path("HomeInvestigator");
            }
        };

}]);