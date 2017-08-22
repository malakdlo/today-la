'use strict';

angular.module('myApp.randomView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/randomsearch', {
    templateUrl: 'randomView/random.html',
    controller: 'RandomCtrl'
  });
}])

.controller('RandomCtrl', function($scope, RandomFactory){
  $scope.searchRandom = RandomFactory.searchRandom;
  $scope.clearRandomSearch = RandomFactory.clearRandomSearch;
})
.factory('RandomFactory', function(){
  
  var RandomFactory = this;
  
  /* DATA */
  RandomFactory.results = [
   {
      "name":"Example 1",
      "details":"Example Details 1",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Sporty"
   },
   {
      "name":"Example 2",
      "details":"Example Details 2",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Nature"
   },
   {
      "name":"Example 3",
      "details":"Example Details 3",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Relaxing"
   },
   {
      "name":"Example 4",
      "details":"Example Details 4",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Romantic "
   },
   {
      "name":"Example 5",
      "details":"Example Details 5",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Games"
   },
   {
      "name":"Example 6",
      "details":"Example Details 6",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Historical"
   },
   {
      "name":"Example 6.5",
      "details":"Example Details 6.5",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Cultural"
   },
   {
      "name":"Example 7",
      "details":"Example Details 7",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Artsy"
   },
   {
      "name":"Example 8",
      "details":"Example Details 8",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Beauty"
   },
   {
      "name":"Example 9",
      "details":"Example Details 9",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 10",
      "details":"Example Details 10",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Fancy"
   },
   {
      "name":"Example 11",
      "details":"Example Details 11",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Sporty"
   },
   {
      "name":"Example 12",
      "details":"Example Details 12",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Nature"
   },
   {
      "name":"Example 13",
      "details":"Example Details 13",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Relaxing"
   },
   {
      "name":"Example 14",
      "details":"Example Details 14",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Romantic "
   },
   {
      "name":"Example 15",
      "details":"Example Details 15",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Games"
   },
   {
      "name":"Example 16",
      "details":"Example Details 16",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Historical/Culture/Informative"
   },
   {
      "name":"Example 17",
      "details":"Example Details 17",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Artsy"
   },
   {
      "name":"Example 18",
      "details":"Example Details 18",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Beauty"
   },
   {
      "name":"Example 19",
      "details":"Example Details 19",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 20",
      "details":"Example Details 20",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Fancy(pricey)"
   },
   {
      "name":"Example 21",
      "details":"Example Details 21",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Casual"
   },
   {
      "name":"Example 22",
      "details":"Example Details 22",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Breakfast"
   },
   {
      "name":"Example 23",
      "details":"Example Details 23",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Brunch"
   },
   {
      "name":"Example 24",
      "details":"Example Details 24",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Lunch"
   },
   {
      "name":"Example 25",
      "details":"Example Details 25",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dinner"
   },
   {
      "name":"Example 26",
      "details":"Example Details 26",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dessert"
   },
   {
      "name":"Example 27",
      "details":"Example Details 27",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Romantic"
   },
   {
      "name":"Example 28",
      "details":"Example Details 28",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Food Truck"
   },
   {
      "name":"Example 29",
      "details":"Example Details 29",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fast Food"
   },
   {
      "name":"Example 30",
      "details":"Example Details 30",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 31",
      "details":"Example Details 31",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fancy (pricey)"
   },
   {
      "name":"Example 32",
      "details":"Example Details 32",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Casual"
   },
   {
      "name":"Example 33",
      "details":"Example Details 33",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Breakfast"
   },
   {
      "name":"Example 34",
      "details":"Example Details 34",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Brunch"
   },
   {
      "name":"Example 35",
      "details":"Example Details 35",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Lunch"
   },
   {
      "name":"Example 36",
      "details":"Example Details 36",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dinner"
   },
   {
      "name":"Example 37",
      "details":"Example Details 37",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dessert"
   },
   {
      "name":"Example 38",
      "details":"Example Details 38",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Romantic"
   },
   {
      "name":"Example 39",
      "details":"Example Details 39",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Food Truck"
   },
   {
      "name":"Example 40",
      "details":"Example Details 40",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fast Food"
   },
   {
      "name":"Example 41",
      "details":"Example Details 41",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 42",
      "details":"Example Details 42",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fancy (pricey)"
   }
];
  console.log(RandomFactory.results);
  
  /****** FUNCTIONS *******/
  
  /** SEARCH RANDOM **/
  RandomFactory.searchRandom = function(){
    if(RandomFactory.results){
      console.log("Able to read RandomFactory.results")
      var randomNum = RandomFactory.getRandomInt(0, RandomFactory.results.length);
      console.log("Will search for event number: " , randomNum);
      var randomEventLink = RandomFactory.results[randomNum].link;
      var randomEventTitle = RandomFactory.results[randomNum].name;
      var randomEventDetails = RandomFactory.results[randomNum].details;
      document.getElementById('randomEventTitle').innerHTML = randomEventTitle;
      document.getElementById('randomDetails').innerHTML = randomEventDetails;
      document.getElementById('randomLink').innerHTML = "Click Here for Your Random Event";
      document.getElementById('randomLink').setAttribute('href', randomEventLink);
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