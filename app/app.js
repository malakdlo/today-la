'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap', 
  'angular.filter'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  
  $locationProvider.hashPrefix('!');
  
  // Home
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html'
  });
  
  // Contact
  $routeProvider.when('/contact', {
    templateUrl: 'views/contact.html',
  });
  
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
