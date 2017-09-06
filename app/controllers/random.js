'use strict';

angular.module('myApp.random', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/randomsearch', {
    templateUrl: 'randomView/random.html',
    controller: 'RandomCtrl'
  });
}])

.controller('RandomCtrl', function($scope, RandomFactory){
  $scope.searchRandom = RandomFactory.searchRandom;
  $scope.clearRandomSearch = RandomFactory.clearRandomSearch;
  $scope.event = RandomFactory.event;
})
.factory('RandomFactory', function(EventsFactory){
  console.log("*************** RandomFactory ***************")
  var RandomFactory = this;
  
  /****** DATA *******/
  EventsFactory.getData().then(function(data){
    RandomFactory.results = EventsFactory.results;
    console.log("EventsFactory.results inside of RandomFactory");
    console.log(EventsFactory.results);
    console.log("RandomFactory.results inside of RandomFactory");
    console.log(RandomFactory.results);
  });
  RandomFactory.event = {};
  
  
  /****** FUNCTIONS *******/
  
  /** SEARCH RANDOM **/
  RandomFactory.searchRandom = function(){
    if(RandomFactory.results){
      console.log("Able to read RandomFactory.results")
      var randomNum = RandomFactory.getRandomInt(0, RandomFactory.results.length);
      console.log("Will search for event number: " , randomNum);
      RandomFactory.event.link = RandomFactory.results[randomNum].link;
      RandomFactory.event.name = RandomFactory.results[randomNum].name;
      RandomFactory.event.details = RandomFactory.results[randomNum].details;
      
//      document.getElementById('randomEventTitle').innerHTML = randomEventTitle;
//      document.getElementById('randomDetails').innerHTML = randomEventDetails;
//      document.getElementById('randomLink').innerHTML = "Click Here for Your Random Event";
//      document.getElementById('randomLink').setAttribute('href', randomEventLink);
    }else{
      console.log("searchRandom function cannot access results array");
    } 
  }
  
  RandomFactory.clearRandomSearch = function(){
    document.getElementById('randomEventTitle').innerHTML = '';
    document.getElementById('randomDetails').innerHTML = '';
    document.getElementById('randomLink').innerHTML = '';
  }
  
  /* HELPER FUNCTIONS */
  RandomFactory.getRandomInt = function(min, max){
    var min = Math.ceil(min), max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  return RandomFactory;
});