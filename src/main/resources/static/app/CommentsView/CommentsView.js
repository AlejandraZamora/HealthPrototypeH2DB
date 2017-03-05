'use strict';

angular.module('myApp.CommentsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsView', {
    templateUrl: 'CommentsView/CommentsView.html',
    controller: 'CommentsViewCtrl'
  });
}])

.controller('CommentsViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {

     person.get({personId:""+$rootScope.idPerson})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.personC=value;
                            $scope.comments=$scope.personC.comments;
                            if (typeof $scope.comments == "undefined"){
                                $scope.commentsY=false;
                                $scope.recomendaciones="No tienes ninguna recomendación";
                            }
                            if(typeof $scope.comments != "undefined"){
                                $scope.commentsY=true;
                            }
                        },
                        //error
                        function( error ){
                            alert("El paciente no se encuentra registrado");
                        }
                );

}]);