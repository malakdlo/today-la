'use strict';

angular.module('myApp.select', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/select', {
    templateUrl: 'selectView/select.html',
    controller: 'SelectController'
  });
}])
.controller('SelectController', function($scope, EventsFactory) {
  console.log("*************** SelectController ***************");
  /****** DATA *******/
    EventsFactory.getData().then(function(data){
    $scope.results = EventsFactory.results;
    console.log("EventsFactory.results inside of SelectController");
    console.log(EventsFactory.results);
    console.log("$scope.results inside of SelectController");
    console.log($scope.results);
  });
    $scope.filteredResults = [];
    $scope.finalData = [];
    $scope.randomEvent = [];
    $scope.selectedCategory;

    // Food Model
    $scope.foodModel = { 
      Casual: false, 
      Breakfast: false, 
      Brunch: false, 
      Lunch: false, 
      Dinner: false, 
      Dessert: false, 
      Romantic: false, 
      FoodTruck: false, 
      FastFood: false, 
      Inexpensive: false, 
      Fancy: false 
    };
    $scope.foodResults = [];
    $scope.$watchCollection('foodModel', function(){
        console.log("*************** Food Results Watcher ***************")
        $scope.foodResults = [];
        angular.forEach($scope.foodModel, function(value, key){
          if(value){
            $scope.foodResults.push(key);
          }
        })// End forEach
        // Test 
        console.log("Updating Food Results Array");
        console.log($scope.foodResults);
        console.log("Compare to")
        console.log($scope.filteredResults)
        // End Test
      });// End Watcher

    // Activities Model
    $scope.activitiesModel = { 
      Athletic: false, 
      Nature: false, 
      Relaxing: false, 
      Romantic : false, 
      Games: false, 
      Cultural: false, 
      Artsy: false, 
      Beauty: false, 
      Inexpensive: false, 
      Fancy: false 
    };
    $scope.activitiesResults = [];
    $scope.$watchCollection('activitiesModel', function(){
        $scope.activitiesResults = [];
        angular.forEach($scope.activitiesModel, function(value, key){
          if(value){
            $scope.activitiesResults.push(key);
          }
        })// End forEach
        // Test 
        console.log("Updating Food Results Array");
        console.log($scope.activitiesResults);
        console.log("Compare to")
        console.log($scope.filteredResults)
        // End Test
      });// End Watcher

    // Buttons
    $scope.activitiesButtons = [
    "Sporty/Athletic",
    "Nature",
    "Relaxing",
    "Romantic ",
    "Games",
    "Historical/Culture/Informative",
    "Artsy",
    "Beauty",
    "Inexpensive",
    "Fancy"
  ];
    $scope.foodButtons = [
    "Casual",
   "Breakfast",
   "Brunch",
   "Lunch",
   "Dinner",
   "Dessert",
   "Romantic",
   "Food Truck",
   "Fast Food",
   "Inexpensive",
   "Fancy"
  ];

  /****** FUNCTIONS *******/
    // Filters
    $scope.findCatOne = function(category){
      console.log("*************** findCatOne ***************");
      console.log("Value of passed in category");
      console.log(category);
      $scope.selectedCategory = category;
    /************* Filter for objects that have "category 1" == category  *************/
       $scope.filteredResults = $scope.results.filter(function(arr){
        // console.log("Value of arr inside of filter")
        // console.log(arr)
        return arr["category1"] === category;
      });// end filter
      // TEST
      // Origional length of the events array and resulting eventsFilteredArr length.
      console.log("Total Num of events: ", $scope.results.length);
      console.log("Total Num of events after filter: ", $scope.filteredResults.length);
      console.log($scope.filteredResults);
      // END TEST
      return $scope.filteredResults;
    }// End findCatOne
    $scope.searchValues = function(catArr){
      console.log("*************** searchValues ***************")
      var catArrItem, filteredDataObj;
      // Test Variables
      /*console.log("Passed in array of categories: ", catArr);
      console.log("Final Data: ", $scope.finalData);
      console.log("Event", $scope.randomEvent);*/
      // End Test Variables

      // Filter for multiple values pushed into catArr
      for(var i =  0; i < $scope.filteredResults.length; i++){
        filteredDataObj = $scope.filteredResults[i];
        for(var j = 0; j < catArr.length; j++){
          catArrItem = catArr[j];
          if(filteredDataObj.category2.indexOf(catArrItem) !== -1 && $scope.finalData.indexOf(filteredDataObj) === -1){
            $scope.finalData.push(filteredDataObj);
          }// End if
        }// End Inside For Loop
      }// End Outside For Loop

      // Randomly select event from finalData array
      var randomNum = $scope.getRandomInt(0, $scope.finalData.length);
      $scope.randomEvent.push($scope.finalData[randomNum]);

      return $scope.randomEvent;  
    } // End searchValues function
    $scope.clearSearch = function(){
      console.log("*************** ClearSearch ***************");
      $scope.filteredResults = [];
      $scope.finalData = [];
      $scope.randomEvent = [];
      if($scope.selectedCategory === 'Food'){
        $scope.foodModel = { 
      Casual: false, 
      Breakfast: false, 
      Brunch: false, 
      Lunch: false, 
      Dinner: false, 
      Dessert: false, 
      Romantic: false, 
      FoodTruck: false, 
      FastFood: false, 
      Inexpensive: false, 
      Fancy: false 
    };
      }
      if($scope.selectedCategory === 'Activities'){
        $scope.activitiesModel = { 
      Athletic: false, 
      Nature: false, 
      Relaxing: false, 
      Romantic : false, 
      Games: false, 
      Cultural: false, 
      Artsy: false, 
      Beauty: false, 
      Inexpensive: false, 
      Fancy: false 
    };
      }
      $scope.selectedCategory = '';
    };
  /* HELPER FUNCTIONS */
    $scope.getRandomInt = function(min, max){
      var min = Math.ceil(min), max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
  
})
.factory('EventsFactory', function($http, $q){
  console.log("*************** EventsFactory ***************");
  var EventsFactory = this;
  
  EventsFactory.getData = function()
  {
    var deferred = $q.defer();
    
    var remoteUrl = "https://script.google.com/macros/s/AKfycbyFVpKhx9l7s0xSV--KJoa21BgfqHpCrqqjgEYdJTOnh673vZE/exec";
    var localData = "../events.json";
    
    $http.get(localData).then(function(response){
      console.log("*************** EventsFactory.getData() Success Callback ***************");
      console.log("EventsFactory.results inside http.get");
      console.log(EventsFactory.results);
      EventsFactory.results = response.data;
      deferred.resolve(response);
    }, function(error){
      console.log("*************** EventsFactory.getData() Error Callback ***************");
    console.log(error.statusText);
    });
    
    return deferred.promise;
  }
  
  EventsFactory.reload = function()
  {
    EventsFactory.getData().then(function(response){
      console.log("Data reloaded", response);
      deferred.resolve(response);
    });
    return deferred.promise;
  }
  
  EventsFactory.getData();
  
  
  return EventsFactory;
  
});