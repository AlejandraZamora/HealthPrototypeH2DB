'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.PatientProfile',
  'myApp.UpdatePatient',
  'myApp.HomePatient',
  'myApp.PatientAutorization',
  'myApp.PatientRegister',
  'myApp.HomeDoctor',
  'myApp.templatePatient',
  'myApp.templateDoctor',
  'myApp.InvestigatorView',
  'myApp.ControlView',
  'myApp.ControlRegister',
  'myApp.CommentsView',
  'myApp.CommentRegister',
  'myApp.CommentsDoctorView',
  'myApp.RegisterDoctorView',
  'myApp.LoginView',
  'myApp.PatientChoiceView',
  'myApp.version',
  'services.factory'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
