'use strict';

angular.module('myApp.templateInvestigator', ['ngRoute'])

.controller('templateInvestigatorCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

      $scope.continueLogoutI=function(){
            $location.path("view1");
      };
      $scope.continueHomeI=function(){
            $location.path("HomeInvestigator");
      };
      $scope.continueRegistersI=function(){
            $location.path("RegistersInvestigatorView");
      };
}]);
