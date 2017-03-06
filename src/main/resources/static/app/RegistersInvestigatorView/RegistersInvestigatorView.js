'use strict';

angular.module('myApp.RegistersInvestigatorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorView', {
    templateUrl: 'RegistersInvestigatorView/RegistersInvestigatorView.html',
    controller: 'RegistersInvestigatorViewCtrl'
  });
}])

.controller('RegistersInvestigatorViewCtrl', ['$rootScope', '$scope', 'persons', function ($rootScope, $scope, persons) {
     persons.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.personsList=value;
                    $scope.sisPressure=[];
                    $scope.disPressure=[];
                    $scope.cholesterol=[];
                    $scope.cardiacRythm=[];
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio'];
                    for (var i = 0; i < $scope.personsList.length; i++) {
                        if($scope.personsList[i].diagnostics.length >= 1){
                            $scope.personAct=$scope.personsList[i];
                            $scope.labels.push($scope.personAct.id);
                            var sisP=0;
                            var disP=0;
                            var chol=0;
                            var cRyt=0;
                            for(var n=0; n<$scope.personAct.diagnostics.length; n++){
                                var dd=$scope.personAct.diagnostics[n];
                                sisP=sisP+dd.systolicPressure;
                                disP=disP+dd.diastolicPressure;
                                chol=chol+dd.bloodCholesterol;
                                cRyt=cRyt+dd.heartRate;
                            }
                            $scope.sisPressure.push(sisP/$scope.personAct.diagnostics.length);
                            $scope.disPressure.push(disP/$scope.personAct.diagnostics.length);
                            $scope.cholesterol.push(chol/$scope.personAct.diagnostics.length);
                            $scope.cardiacRythm.push(cRyt/$scope.personAct.diagnostics.length);
                            $scope.diagnostics.push($scope.personsList[i].diagnostics[0]);
                        }
                    }
                    sisP=0;
                    disP=0;
                    chol=0;
                    cRyt=0;
                    for(var j = 0; j < $scope.sisPressure.length; j++) {
                        sisP=sisP+$scope.sisPressure[j];
                        disP=disP+$scope.disPressure[j];
                        chol=chol+$scope.cholesterol[j];
                        cRyt=cRyt+$scope.cardiacRythm[j];
                    }
                    $scope.todoData=[];
                    $scope.todoData.push(sisP/$scope.sisPressure.length);
                    $scope.todoData.push(disP/$scope.sisPressure.length);
                    $scope.todoData.push(chol/$scope.sisPressure.length);
                    $scope.todoData.push(cRyt/$scope.sisPressure.length);
                    $scope.todoLabels=['Presión S.','Presión D.','Colesterol','Ritmo Cardiaco'];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
