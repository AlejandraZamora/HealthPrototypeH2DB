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
        $scope.pId=$rootScope.pId;
        $scope.saveComment= function(){
            $scope.comment={"description":$scope.description,"title":$scope.title};
            $scope.diagnostic={"systolicPressure":$scope.siPresuare,"diastolicPressure":$scope.diPresuare,"bloodCholesterol":$scope.cholesterol,"heartRate":$scope.cardiacRythm,"date":$scope.date};
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
                            },
                            //error
                            function( error ){
                                alert("El paciente no se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("El paciente no se encuentra registrado");
                    }
            );
            $location.path("DoctorView");
        };
}]);