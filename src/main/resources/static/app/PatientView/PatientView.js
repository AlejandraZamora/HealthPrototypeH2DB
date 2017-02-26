'use strict';

angular.module('myApp.PatientView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientView', {
    templateUrl: 'PatientView/PatientView.html',
    controller: 'PatientViewCtrl'
  });
}])

.controller('PatientViewCtrl', ['$rootScope', '$scope', 'person', '$location', 'comments', function ($rootScope, $scope, person,$location, comments) {

    $scope.person=$rootScope.person;
    comments.get({personId:""+1})
            .$promise.then(
                    //success
                    function( value ){
                        $rootScope.comments=value;
                        $scope.cant=$scope.comments.length;
                    },
                    //error
                    function( error ){
                        alert("El paciente no se encuentra registrado");
                    }
            );

    $scope.continueCR=function(){
        $location.path("ControlRegister");
    };

    $scope.continueCV=function(){
        $location.path("ControlView");
    };

    $scope.continueCS=function(){
        $location.path("CommentsView")
    };
}]);
