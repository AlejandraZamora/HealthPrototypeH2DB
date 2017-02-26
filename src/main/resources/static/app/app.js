'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.PatientView',
  'myApp.PatientAutorization',
  'myApp.PatientRegister',
  'myApp.DoctorView',
  'myApp.InvestigatorView',
  'myApp.ControlView',
  'myApp.ControlRegister',
  'myApp.version',
  'services.factory'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
