'use strict';

angular.module('myApp.ControlRegister', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegister', {
    templateUrl: 'ControlRegister/ControlRegister.html',
    controller: 'ControlRegisterCtrl'
  });
}])

.controller('ControlRegisterCtrl', ['$rootScope', '$scope', 'diagnostics','$http','$resource', '$location', function ($rootScope, $scope, diagnostics, $http, $resource, $location) {
        $scope.date=null;
        $scope.siPresuare=null;
        $scope.diPresuare=null;
        $scope.cholesterol=null;
        $scope.cardiacRythm=null;

        $scope.saveRegister= function(){
            $scope.diagnostic={"systolicPressure":$scope.siPresuare,"diastolicPressure":$scope.diPresuare,"bloodCholesterol":$scope.cholesterol,"heartRate":$scope.cardiacRythm,"date":$scope.date};
            diagnostics.save({personId:""+$rootScope.person.id},$scope.diagnostic,function(){
                console.log("Diagnostic save "+$scope.diagnostic);
            });
            $location.path("ControlView");
        };
}]);