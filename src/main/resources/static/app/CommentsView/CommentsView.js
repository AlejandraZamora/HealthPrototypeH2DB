'use strict';

angular.module('myApp.CommentsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsView', {
    templateUrl: 'CommentsView/CommentsView.html',
    controller: 'CommentsViewCtrl'
  });
}])

.controller('CommentsViewCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    //$rootScope.person.id;
    $scope.commentsP=$rootScope.comments;

}]);
