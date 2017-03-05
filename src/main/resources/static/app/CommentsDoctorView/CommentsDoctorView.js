'use strict';

angular.module('myApp.CommentsDoctorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsDoctorView', {
    templateUrl: 'CommentsDoctorView/CommentsDoctorView.html',
    controller: 'CommentsDoctorViewCtrl'
  });
}])

.controller('CommentsDoctorViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {
     $scope.foundCD=$rootScope.FindID;
     person.get({personId:""+$rootScope.patientId})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.personC=value;
                            $scope.comments=$scope.personC.comments;
                            if (typeof $scope.comments == "undefined"){
                                $scope.commentsY=false;
                                $scope.recomendaciones="No tiene ninguna recomendación";
                            }
                            if(typeof $scope.comments != "undefined"){
                                $scope.commentsY=true;
                            }
                        },
                        //error
                        function( error ){
                            console.log("El paciente no se encuentra registrado");
                        }
                );

}]);
