'use strict';

angular.module('services.factory', ['ngRoute', 'ngResource'])

.factory('person', function($resource){
      return $resource('/person/:personName',{id:"@_personName"},{get: { method: 'GET'}});
})
.factory('persons', function($resource) {
    return $resource('/person',{},{ 'get': { method: 'GET', isArray: true}, 'update': { method: 'PUT', isArray: false}});
});