'use strict';

angular.module('myApp.DoctorProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/DoctorProfile', {
    templateUrl: 'DoctorProfile/DoctorProfile.html',
    controller: 'DoctorProfileCtrl'
  });
}])

.controller('DoctorProfileCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

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
