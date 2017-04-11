'use strict';

angular.module('myApp.templateInvestigator', ['ngRoute'])

.controller('templateInvestigatorCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

      $scope.continueHomeI=function(){
            $location.path("HomeInvestigator");
      };
      $scope.continueRegistersI=function(){
            $location.path("RegistersInvestigatorView");
      };
      $scope.continueDoctorProfile=function(){
            $location.path("InvestigatorProfile");
      };
}]);
