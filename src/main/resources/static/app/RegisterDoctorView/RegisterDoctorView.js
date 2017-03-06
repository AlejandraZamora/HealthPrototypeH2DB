'use strict';

angular.module('myApp.RegisterDoctorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterDoctorView', {
    templateUrl: 'RegisterDoctorView/RegisterDoctorView.html',
    controller: 'RegisterDoctorViewCtrl'
  });
}])

.controller('RegisterDoctorViewCtrl', ['$rootScope', '$scope', 'person', 'persons', function ($rootScope, $scope, person, persons) {

    $scope.foundRD=$rootScope.FindID;
    person.get({personId:""+$rootScope.patientId})
    .$promise.then(
            //success
            function( value ){
                $scope.person=value;
                $scope.diagnostics=$scope.person.diagnostics;
                $scope.sisPressure=[];
                $scope.disPressure=[];
                $scope.cholesterol=[];
                $scope.cardiacRythm=[];
                $scope.labels=[];
                $scope.series = ['Datos de Control'];
                for(var n=0; n<$scope.diagnostics.length; n++){
                    var dd=$scope.diagnostics[n];
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
                console.log("Error");
            }
    );

}]);
