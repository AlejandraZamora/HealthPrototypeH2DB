'use strict';

angular.module('myApp.HomePatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomePatient', {
    templateUrl: 'HomePatient/HomePatient.html',
    controller: 'HomePatientCtrl'
  });
}])

.controller('HomePatientCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

      person.get({personId:""+$rootScope.idPerson})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personH=value;
                        $scope.commentsH=$scope.personH.comments;
                        if (typeof $scope.commentsH == "undefined"){
                            $scope.recomendacionesH="No tienes ninguna recomendación";
                            $scope.cantH=undefined;
                        }
                        if(typeof $scope.commentsH != "undefined"){
                            $scope.recomendacionesH="Tienes recomendaciones de tú médico!!";
                            $scope.cantH=$scope.commentsH.length;
                        }
                        $scope.diagnosticsH=$scope.personH.diagnostics;
                    },
                    //error
                    function( error ){
                        alert("El paciente no se encuentra registrado");
                    }
            );
      $scope.continueCS=function(){
              $location.path("CommentsView");
          };
}]);
