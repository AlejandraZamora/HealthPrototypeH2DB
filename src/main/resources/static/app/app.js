'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.PatientProfile',
  'myApp.UpdatePerson',
  'myApp.HomePatient',
  'myApp.Register',
  'myApp.HomeDoctor',
  'myApp.templatePatient',
  'myApp.templateDoctor',
  'myApp.templateInvestigator',
  'myApp.HomeInvestigator',
  'myApp.RegistersInvestigatorView',
  'myApp.ControlView',
  'myApp.ControlRegister',
  'myApp.CommentsView',
  'myApp.CommentRegister',
  'myApp.CommentsDoctorView',
  'myApp.RegisterDoctorView',
  'myApp.Login',
  'myApp.DoctorProfile',
  'myApp.InvestigatorProfile',
  'myApp.version',
  'services.factory',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider','$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Login'});
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

}])
.controller('general', ['$scope', '$rootScope',  '$http', '$location', function($scope,$rootScope,$http,$location ){
    $scope.logout = function () {
        $http.post('/logout', {}).then(function () {
            $rootScope.authenticated = false;
            $location.path("/");
        },function (data) {
            $rootScope.authenticated = false;
        });
    };
}]);
