'use strict';

angular.module('myApp.templateDoctor', ['ngRoute'])

.controller('templateDoctorCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

      $scope.continueLogoutD=function(){
            $location.path("view1");
      };
      $scope.continueHomeD=function(){
            $location.path("HomeDoctor");
      };
      $scope.continueRegistersP=function(){
            $location.path("RegisterDoctorView");
      };
      $scope.continueCommentRegister=function(){
            $location.path("CommentRegister");
      };
      $scope.continueCommentView=function(){
            $location.path("CommentsDoctorView");
      };
}]);
