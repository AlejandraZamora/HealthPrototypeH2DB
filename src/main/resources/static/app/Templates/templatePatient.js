'use strict';

angular.module('myApp.templatePatient', ['ngRoute'])

.controller('templatePatientCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

      $scope.continuePerfil=function(){
            $location.path("PatientProfile");
      };
      $scope.continueHome=function(){
            $location.path("HomePatient");
      };
      $scope.continueComments=function(){
            $location.path("CommentsView");
      };
      $scope.continueCRegister=function(){
            $location.path("ControlRegister");
      };
      $scope.continueCView=function(){
            $location.path("ControlView");
      };
}]);
