'use strict';

angular.module('myApp.selectView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/select', {
    templateUrl: 'selectView/select.html'
  });
}])
