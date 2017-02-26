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
                    $scope.diagnostics=[];
                    for (var i = 0; i < $scope.personsList.length; i++) {
                        if($scope.personsList[i].diagnostics.length >= 1){
                            $scope.diagnostics.push($scope.personsList[i].diagnostics[0]);
                        }
                    }
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );

}]);
