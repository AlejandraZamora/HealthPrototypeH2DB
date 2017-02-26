'use strict';

angular.module('myApp.CommentRegister', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentRegister', {
    templateUrl: 'CommentRegister/CommentRegister.html',
    controller: 'CommentRegisterCtrl'
  });
}])

.controller('CommentRegisterCtrl', ['$rootScope', '$scope', 'comments','$http','$resource', '$location', function ($rootScope, $scope, comments, $http, $resource, $location) {
        $scope.title=null;
        $scope.description=null;
        $scope.pId=$rootScope.pId;
        $scope.saveComment= function(){
            $scope.comment={"description":$scope.description,"title":$scope.title};
            comments.save({personId:""+$rootScope.pId},$scope.comment,function(){
                console.log("Comment save "+$scope.comment);
            });
            $location.path("DoctorView");
        };
}]);