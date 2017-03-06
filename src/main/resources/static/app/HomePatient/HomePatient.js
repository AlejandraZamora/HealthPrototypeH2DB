'use strict';

angular.module('myApp.HomePatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomePatient', {
    templateUrl: 'HomePatient/HomePatient.html',
    controller: 'HomePatientCtrl'
  });
}])

.controller('HomePatientCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

      person.get({personId:""+$rootScope.idPerson})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personH=value;
                        $scope.commentsH=$scope.personH.comments;
                        if (typeof $scope.commentsH == "undefined"){
                            $scope.recomendacionesH="No tienes ninguna recomendación";
                            $scope.cantH=undefined;
                        }
                        if(typeof $scope.commentsH != "undefined"){
                            $scope.recomendacionesH="Tienes recomendaciones de tú médico!!";
                            $scope.cantH=$scope.commentsH.length;
                        }
                        $scope.diagnosticsH=$scope.personH.diagnostics;
                        $scope.sisPressure=[];
                        $scope.disPressure=[];
                        $scope.cholesterol=[];
                        $scope.cardiacRythm=[];
                        $scope.labels=[];
                        $scope.series = ['Datos de Control'];
                        for(var n=0; n<$scope.diagnosticsH.length; n++){
                            var dd=$scope.diagnosticsH[n];
                            $scope.sisPressure.push(dd.systolicPressure);
                            $scope.disPressure.push(dd.diastolicPressure);
                            $scope.cholesterol.push(dd.bloodCholesterol);
                            $scope.cardiacRythm.push(dd.heartRate);
                            var datee=new Date(dd.date);
                            var dia = datee.getDate();
                            var mes = parseInt(datee.getMonth()) + 1;
                            var year = datee.getFullYear();
                            var dated=dia+"/"+mes+"/"+year;
                            $scope.labels.push(dated);
                        }
                    },
                    //error
                    function( error ){
                        alert("El paciente no se encuentra registrado");
                    }
            );
      $scope.continueCS=function(){
              $location.path("CommentsView");
          };
}]);
