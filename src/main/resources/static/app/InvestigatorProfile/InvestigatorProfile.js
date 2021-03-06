'use strict';

angular.module('myApp.InvestigatorProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/InvestigatorProfile', {
    templateUrl: 'InvestigatorProfile/InvestigatorProfile.html',
    controller: 'InvestigatorProfileCtrl'
  });
}])

.controller('InvestigatorProfileCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

    person.get({personId:""+$rootScope.RegisteredIdPerson})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.person=value;
                        },
                        //error
                        function( error ){
                            console.log("error");
                        }
                );
    $scope.continueUP=function(){
        $location.path("UpdatePerson");
    };

}]);
