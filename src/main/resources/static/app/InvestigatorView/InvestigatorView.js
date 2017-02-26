'use strict';

angular.module('myApp.InvestigatorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/InvestigatorView', {
    templateUrl: 'InvestigatorView/InvestigatorView.html',
    controller: 'InvestigatorViewCtrl'
  });
}])

.controller('InvestigatorViewCtrl', ['$rootScope', '$scope', 'persons', function ($rootScope, $scope, persons) {

        persons.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.personsList=value;
                    $scope.diagnostics=$scope.personsList[0].diagnostics;
                    console.info($scope.diagnostics);
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );

}]);
