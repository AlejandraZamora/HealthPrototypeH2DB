'use strict';

angular.module('myApp.Login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Login', {
    templateUrl: 'Login/Login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', '$rootScope',  '$http', '$location', function($scope,$rootScope,$http,$location ){
    var authenticate = function (credentials, callback) {

             var headers = credentials ? {authorization: "Basic "
                         + btoa(credentials.username + ":" + credentials.password)
             } : {};

             $http.get('user', {headers: headers}).then(function (data) {
                 if (data.data.name) {
                     $rootScope.authenticated = true;
                 } else {
                     $rootScope.authenticated = false;
                 }
                 callback && callback();
             }, function () {
                 $rootScope.authenticated = false;
                 callback && callback();
             });

         };

         authenticate();
         $scope.credentials = {};
         $scope.login = function () {
             authenticate($scope.credentials, function () {
                 if ($rootScope.authenticated) {
                     $location.path("/view1");
                     $scope.error = false;
                 } else {
                     $location.path("/LoginView");
                     $scope.error = true;
                 }
             });
    };
}]);