'use strict';

angular.module('myApp.CommentRegister', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentRegister', {
    templateUrl: 'CommentRegister/CommentRegister.html',
    controller: 'CommentRegisterCtrl'
  });
}])

.controller('CommentRegisterCtrl', ['$rootScope', '$scope', 'person','persons','$http','$resource', '$location', function ($rootScope, $scope, person, persons, $http, $resource, $location) {
        $scope.title=null;
        $scope.description=null;
        $scope.date=new Date();
        $scope.pId=$rootScope.patientId;
        $scope.foundC=$rootScope.FindID;
        $scope.saveComment= function(){
            $scope.comment={"date":$scope.date,"description":$scope.description,"title":$scope.title};
            person.get({personId:""+$scope.pId})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.person=value;
                        $scope.person.comments.push($scope.comment);
                        persons.update($scope.person)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.person.comments);
                                $location.path("CommentsDoctorView");
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
        };
}]);