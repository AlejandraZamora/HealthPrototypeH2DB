'use strict';

angular.module('services.factory', ['ngRoute', 'ngResource'])

.factory('person', function($resource){
      return $resource('/person/:personId',{id:"@_personId"},{get: { method: 'GET'}});
})
.factory('diagnostics', function($resource) {
     return $resource('/person/:personId/diagnostic',{},{ 'get': { method: 'GET', isArray: true}});
 })
.factory('comments', function($resource) {
     return $resource('/person/:personId/comment',{},{ 'get': { method: 'GET', isArray: true}});
 })
.factory('persons', function($resource) {
    return $resource('/person',{},{ 'get': { method: 'GET', isArray: true}, 'update': { method: 'PUT', isArray: false}});
});