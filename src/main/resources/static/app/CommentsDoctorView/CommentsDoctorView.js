'use strict';

angular.module('myApp.CommentsDoctorView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsDoctorView', {
    templateUrl: 'CommentsDoctorView/CommentsDoctorView.html',
    controller: 'CommentsDoctorViewCtrl'
  });
}])

.controller('CommentsDoctorViewCtrl', ['$rootScope', '$scope', 'person', function ($rootScope, $scope, person) {
     $scope.foundCD=$rootScope.FindID;
     person.get({personId:""+$rootScope.patientId})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.personC=value;
                            $scope.comments=[];
                            $scope.personC.comments.orderByDate("date", -1);
                            $scope.currentDate=new Date();
                            for(var n=0; n< $scope.personC.comments.length; n++){
                                var cc=$scope.personC.comments[n];
                                var datee=new Date(cc.date);
                                if(datee >= ($scope.currentDate.setDate($scope.currentDate.getDate()-14))){
                                    $scope.comments.push(cc);
                                }else{
                                    break;
                                }
                            }
                            if (typeof $scope.comments == "undefined"){
                                $scope.commentsY=false;
                                $scope.recomendaciones="No tiene ninguna recomendación";
                            }
                            if(typeof $scope.comments != "undefined"){
                                $scope.commentsY=true;
                            }
                        },
                        //error
                        function( error ){
                            console.log("El paciente no se encuentra registrado");
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
