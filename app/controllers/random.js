'use strict';

angular.module('myApp')
.controller('RandomCtrl', function($scope, EventsFactory){
  
  EventsFactory.getData().then(function(data){
    $scope.results = EventsFactory.results;
    console.log("EventsFactory.results inside of RandomCtrl");
    console.log(EventsFactory.results);
    console.log("$scope.results inside of RandomCtrl");
    console.log($scope.results);
  });
  $scope.event = {};
  
  $scope.searchRandom = function(){
    if($scope.results){
      console.log("Able to read $scope.results")
      var randomNum = $scope.getRandomInt(0, $scope.results.length);
      console.log("Will search for event number: " , randomNum);
      $scope.event.link = $scope.results[randomNum].link;
      $scope.event.name = $scope.results[randomNum].name;
      $scope.event.details = $scope.results[randomNum].details;
      $scope.event.category2 = $scope.results[randomNum].category2;
      console.log("Event Object");
      console.log($scope.event);
      console.log($scope.event.category2)
    }else{
      console.log("searchRandom function cannot access results array");
    } 
  }
  
  $scope.clearRandomSearch = function(){
    $scope.event = {};
    console.log("Reset $scope.event");
    console.log($scope.event);
  }
  
  $scope.getRandomInt = function(min, max){
    var min = Math.ceil(min), max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
});

/* Factory */
/*
.factory('$scope', function(EventsFactory){
  console.log("*************** $scope ***************")
  var $scope = this;
  
  EventsFactory.getData().then(function(data){
    $scope.results = EventsFactory.results;
    console.log("EventsFactory.results inside of $scope");
    console.log(EventsFactory.results);
    console.log("$scope.results inside of $scope");
    console.log($scope.results);
  });
  $scope.event = {};
  
  $scope.searchRandom = function(){
    if($scope.results){
      console.log("Able to read $scope.results")
      var randomNum = $scope.getRandomInt(0, $scope.results.length);
      console.log("Will search for event number: " , randomNum);
      $scope.event.link = $scope.results[randomNum].link;
      $scope.event.name = $scope.results[randomNum].name;
      $scope.event.details = $scope.results[randomNum].details;
      console.log("Event Object");
      console.log($scope.event);
    }else{
      console.log("searchRandom function cannot access results array");
    } 
  }
  
  $scope.clearRandomSearch = function(){
    $scope.event = {};
    console.log("Reset $scope.event");
    console.log($scope.event);
  }
  
  $scope.getRandomInt = function(min, max){
    var min = Math.ceil(min), max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  return $scope;
});
*/

