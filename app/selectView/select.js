'use strict';

angular.module('myApp.selectView', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/select', {
    templateUrl: 'selectView/select.html',
    controller: 'SelectController'
  });
}])

.controller('SelectController', function($scope) {
/* DATA */
  // Results
  $scope.results = [
   {
      "name":"Example 1",
      "details":"Example Details 1",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Sporty",
         "",
         ""
      ]
   },
   {
      "name":"Example 2",
      "details":"Example Details 2",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Romantic ",
         "Games",
         "Historical"
      ]
   },
   {
      "name":"Example 3",
      "details":"Example Details 3",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Artsy",
         "Beauty",
         "Inexpensive"
      ]
   },
   {
      "name":"Example 4",
      "details":"Example Details 4",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Fancy",
         "Culture",
         "Sporty"
      ]
   },
   {
      "name":"Example 5",
      "details":"Example Details 5",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Sporty",
         "Nature",
         "Relaxing"
      ]
   },
   {
      "name":"Example 6",
      "details":"Example Details 6",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Romantic ",
         "Games",
         "Historical"
      ]
   },
   {
      "name":"Example 6.5",
      "details":"Example Details 6.5",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Artsy",
         "Beauty",
         "Inexpensive"
      ]
   },
   {
      "name":"Example 7",
      "details":"Example Details 7",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Fancy",
         "Culture",
         "Sporty"
      ]
   },
   {
      "name":"Example 8",
      "details":"Example Details 8",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Sporty",
         "Nature",
         "Relaxing"
      ]
   },
   {
      "name":"Example 9",
      "details":"Example Details 9",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Romantic ",
         "Games",
         "Historical"
      ]
   },
   {
      "name":"Example 10",
      "details":"Example Details 10",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Artsy",
         "Beauty",
         "Inexpensive"
      ]
   },
   {
      "name":"Example 11",
      "details":"Example Details 11",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Fancy",
         "Culture",
         "Sporty"
      ]
   },
   {
      "name":"Example 12",
      "details":"Example Details 12",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Sporty",
         "Nature",
         "Relaxing"
      ]
   },
   {
      "name":"Example 13",
      "details":"Example Details 13",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Romantic ",
         "Games",
         "Historical"
      ]
   },
   {
      "name":"Example 14",
      "details":"Example Details 14",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Artsy",
         "Beauty",
         "Inexpensive"
      ]
   },
   {
      "name":"Example 15",
      "details":"Example Details 15",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Fancy",
         "Culture",
         "Sporty"
      ]
   },
   {
      "name":"Example 16",
      "details":"Example Details 16",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Sporty",
         "Nature",
         "Relaxing"
      ]
   },
   {
      "name":"Example 17",
      "details":"Example Details 17",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Romantic ",
         "Games",
         "Historical"
      ]
   },
   {
      "name":"Example 18",
      "details":"Example Details 18",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Artsy",
         "Beauty",
         "Inexpensive"
      ]
   },
   {
      "name":"Example 19",
      "details":"Example Details 19",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Fancy",
         "Culture",
         "Sporty"
      ]
   },
   {
      "name":"Example 20",
      "details":"Example Details 20",
      "link":"http://scriptmedia.biz",
      "category1":"Activities",
      "category2":[
         "Sporty",
         "Nature",
         "Relaxing"
      ]
   },
   {
      "name":"Example 21",
      "details":"Example Details 21",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Fancy",
         "Inexpensive",
         "FastFood"
      ]
   },
   {
      "name":"Example 22",
      "details":"Example Details 22",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "FoodTruck",
         "Romantic",
         "Dessert"
      ]
   },
   {
      "name":"Example 23",
      "details":"Example Details 23",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Dinner",
         "Lunch",
         "Brunch"
      ]
   },
   {
      "name":"Example 24",
      "details":"Example Details 24",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Breakfast",
         "Casual",
         "Fancy"
      ]
   },
   {
      "name":"Example 25",
      "details":"Example Details 25",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Fancy",
         "Inexpensive",
         "FastFood"
      ]
   },
   {
      "name":"Example 26",
      "details":"Example Details 26",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "FoodTruck",
         "Romantic",
         "Dessert"
      ]
   },
   {
      "name":"Example 27",
      "details":"Example Details 27",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Dinner",
         "Lunch",
         "Brunch"
      ]
   },
   {
      "name":"Example 28",
      "details":"Example Details 28",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Breakfast",
         "Casual",
         "Fancy"
      ]
   },
   {
      "name":"Example 29",
      "details":"Example Details 29",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Fancy",
         "Inexpensive",
         "FastFood"
      ]
   },
   {
      "name":"Example 30",
      "details":"Example Details 30",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "FoodTruck",
         "Romantic",
         "Dessert"
      ]
   },
   {
      "name":"Example 31",
      "details":"Example Details 31",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Dinner",
         "Lunch",
         "Brunch"
      ]
   },
   {
      "name":"Example 32",
      "details":"Example Details 32",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Breakfast",
         "Casual",
         "Fancy"
      ]
   },
   {
      "name":"Example 33",
      "details":"Example Details 33",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Fancy",
         "Inexpensive",
         "FastFood"
      ]
   },
   {
      "name":"Example 34",
      "details":"Example Details 34",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "FoodTruck",
         "Romantic",
         "Dessert"
      ]
   },
   {
      "name":"Example 35",
      "details":"Example Details 35",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Dinner",
         "Lunch",
         "Brunch"
      ]
   },
   {
      "name":"Example 36",
      "details":"Example Details 36",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Breakfast",
         "Casual",
         "Fancy"
      ]
   },
   {
      "name":"Example 37",
      "details":"Example Details 37",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Fancy",
         "Inexpensive",
         "FastFood"
      ]
   },
   {
      "name":"Example 38",
      "details":"Example Details 38",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "FoodTruck",
         "Romantic",
         "Dessert"
      ]
   },
   {
      "name":"Example 39",
      "details":"Example Details 39",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Dinner",
         "Lunch",
         "Brunch"
      ]
   },
   {
      "name":"Example 40",
      "details":"Example Details 40",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Breakfast",
         "Casual",
         "Fancy"
      ]
   },
   {
      "name":"Example 41",
      "details":"Example Details 41",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "Fancy",
         "Inexpensive",
         "FastFood"
      ]
   },
   {
      "name":"Example 42",
      "details":"Example Details 42",
      "link":"http://scriptmedia.biz",
      "category1":"Food",
      "category2":[
         "FoodTruck",
         "Romantic",
         "Dessert"
      ]
   }
];
  $scope.filteredResults = [];
  $scope.finalData = [];
  
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
  $scope.activitiesModel = { Athletic: false, Nature: false, Relaxing: false, Romantic : false, Games: false, Cultural: false, Artsy: false, Beauty: false, Inexpensive: false, Fancy: false };
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
  $scope.title = "Title";
  
  
/* MAIN FUNCTIONS */
  // Open and Close Food Form
  $scope.openFoodForm = function(){
    document.getElementById('foodSearch').setAttribute('class', 'open');
  };
  $scope.closeFoodForm = function(){        
    document.getElementById('foodSearch').setAttribute('class', '');
  };
  // Open and Close Activities Form
  $scope.openActivitiesForm = function(){
    document.getElementById('activitiesSearch').setAttribute('class', 'open');
  };
  $scope.closeActivitiesForm = function(){        
    document.getElementById('activitiesSearch').setAttribute('class', '');
  };
  
  // Filters
  $scope.findCatOne = function(category){
    console.log("Value of passed in category");
    console.log(category);
/************* Filter for objects that have "category 1" == category  *************/
     $scope.filteredResults = $scope.results.filter(function(arr){
      // console.log("Value of arr inside of filter")
      // console.log(arr)
      return arr["category1"] === category;
    });// end filter
    // TEST
    // Origional length of the events array and resulting eventsFilteredArr length.
    console.log("*************** findCatOne func ***************")
    console.log("Total Num of events: ", $scope.results.length);
    console.log("Total Num of events after filter: ", $scope.filteredResults.length);
    console.log($scope.filteredResults);
    // END TEST
    return $scope.filteredResults;
  }// End findCatOne
  $scope.searchValues = function(catArr){
    var catArrItem, filteredDataObj;
    $scope.finalData = [];
    
    for(var i =  0; i < $scope.filteredResults.length; i++){
    filteredDataObj = $scope.filteredResults[i];
    for(var j = 0; j < catArr.length; j++){
      catArrItem = catArr[j];

      if(filteredDataObj.category2.indexOf(catArrItem) !== -1 && $scope.finalData.indexOf(filteredDataObj) === -1){
        $scope.finalData.push(filteredDataObj);
      }// End if
    }// End Inside For Loop
  }// End Outside For Loop
  
  return $scope.finalData;
  } // End searchValues function
  
/* HELPER FUNCTIONS */
  
});