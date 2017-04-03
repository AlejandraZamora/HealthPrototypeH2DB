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
                $scope.diagnosticsNew=[];
                $scope.labels=[];
                $scope.series = ['Datos de Control'];
                $scope.diagnostics.orderByDate("date", -1);
                $scope.currentDate=new Date();
                for(var n=0; n< $scope.diagnostics.length; n++){
                    var dd=$scope.diagnostics[n];
                    var datee=new Date(dd.date);
                    if(datee >= ($scope.currentDate.setDate($scope.currentDate.getDate()-14))){
                        $scope.diagnosticsNew.push(dd);
                        $scope.sisPressure.push(dd.systolicPressure);
                        $scope.disPressure.push(dd.diastolicPressure);
                        $scope.cholesterol.push(dd.bloodCholesterol);
                        $scope.cardiacRythm.push(dd.heartRate);
                        var dia = datee.getDate();
                        var mes = parseInt(datee.getMonth()) + 1;
                        var year = datee.getFullYear();
                        var dated=dia+"/"+mes+"/"+year;
                        $scope.labels.push(dated);
                    }else{
                        break;
                    }
                }
            },
            //error
            function( error ){
                console.log("Error");
            }
    );

    Array.prototype.orderByDate=function(p,so){
      if(so!=-1&&so!=1)so=1;
      this.sort(function(a,b){
        var da=new Date(a[p]),db=new Date(b[p]);
        return(da-db)*so;
      })
    };

}]);
