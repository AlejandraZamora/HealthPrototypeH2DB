'use strict';

angular.module('myApp.PatientView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientView', {
    templateUrl: 'PatientView/PatientView.html',
    controller: 'PatientViewCtrl'
  });
}])

.controller('PatientViewCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

    $scope.continueCR=function(){
        $location.path("ControlRegister");
    };

    $scope.continueCV=function(){
        $location.path("ControlView");
    };

    $scope.continueCS=function(){
        $location.path("CommentsView");
    };

    $scope.person=$rootScope.person;
    person.get({personId:""+$rootScope.idPerson})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personC=value;
                        $rootScope.comments=$scope.personC.comments;
                        if (typeof $rootScope.comments == "undefined"){
                            $scope.recomendaciones="No tienes ninguna recomendación";
                            $scope.cant=undefined;
                        }
                        if(typeof $rootScope.comments != "undefined"){
                            $scope.recomendaciones="Tienes recomendaciones de tú médico!!";
                            $scope.cant=$scope.comments.length;
                        }
                    },
                    //error
                    function( error ){
                        alert("El paciente no se encuentra registrado");
                    }
            );
}]);
