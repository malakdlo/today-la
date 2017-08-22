angular.module('myApp.filterView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/filtersearch', {
    templateUrl: 'filterView/filter.html'
  });
}])

.controller('FilterCtrl', function($scope, FilterFactory){
  
})
.factory('FilterFactory', function(){
  var FilterFactory = this;
  
  /* DATA */
  FilterFactory.results = [
   {
      "name":"Example 1",
      "details":"Example Details 1",
      "date":"2017-07-27T07:00:00.000Z",
      "start time ":"1899-12-31T02:00:00.000Z",
      "end time":"1899-12-31T05:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Sporty/Athletic"
   },
   {
      "name":"Example 2",
      "details":"Example Details 2",
      "date":"2017-07-28T07:00:00.000Z",
      "start time ":"1899-12-31T03:00:00.000Z",
      "end time":"1899-12-31T06:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Nature"
   },
   {
      "name":"Example 3",
      "details":"Example Details 3",
      "date":"2017-07-29T07:00:00.000Z",
      "start time ":"1899-12-31T04:00:00.000Z",
      "end time":"1899-12-31T07:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Relaxing"
   },
   {
      "name":"Example 4",
      "details":"Example Details 4",
      "date":"2017-07-30T07:00:00.000Z",
      "start time ":"1899-12-31T05:00:00.000Z",
      "end time":"1899-12-31T08:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Romantic "
   },
   {
      "name":"Example 5",
      "details":"Example Details 5",
      "date":"2017-07-31T07:00:00.000Z",
      "start time ":"1899-12-31T06:00:00.000Z",
      "end time":"1899-12-31T09:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Games"
   },
   {
      "name":"Example 6",
      "details":"Example Details 6",
      "date":"2017-08-01T07:00:00.000Z",
      "start time ":"1899-12-31T07:00:00.000Z",
      "end time":"1899-12-31T10:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Historical/Culture/Informative"
   },
   {
      "name":"Example 7",
      "details":"Example Details 7",
      "date":"2017-08-02T07:00:00.000Z",
      "start time ":"1899-12-31T08:00:00.000Z",
      "end time":"1899-12-31T11:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Artsy"
   },
   {
      "name":"Example 8",
      "details":"Example Details 8",
      "date":"2017-08-03T07:00:00.000Z",
      "start time ":"1899-12-31T09:00:00.000Z",
      "end time":"1899-12-31T12:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Beauty"
   },
   {
      "name":"Example 9",
      "details":"Example Details 9",
      "date":"2017-08-04T07:00:00.000Z",
      "start time ":"1899-12-31T10:00:00.000Z",
      "end time":"1899-12-31T13:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 10",
      "details":"Example Details 10",
      "date":"2017-08-05T07:00:00.000Z",
      "start time ":"1899-12-31T11:00:00.000Z",
      "end time":"1899-12-31T14:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Fancy(pricey)"
   },
   {
      "name":"Example 11",
      "details":"Example Details 11",
      "date":"2017-08-06T07:00:00.000Z",
      "start time ":"1899-12-31T12:00:00.000Z",
      "end time":"1899-12-31T15:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Sporty/Athletic"
   },
   {
      "name":"Example 12",
      "details":"Example Details 12",
      "date":"2017-08-07T07:00:00.000Z",
      "start time ":"1899-12-31T13:00:00.000Z",
      "end time":"1899-12-31T16:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Nature"
   },
   {
      "name":"Example 13",
      "details":"Example Details 13",
      "date":"2017-08-08T07:00:00.000Z",
      "start time ":"1899-12-31T14:00:00.000Z",
      "end time":"1899-12-31T17:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Relaxing"
   },
   {
      "name":"Example 14",
      "details":"Example Details 14",
      "date":"2017-08-09T07:00:00.000Z",
      "start time ":"1899-12-31T15:00:00.000Z",
      "end time":"1899-12-31T18:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Romantic "
   },
   {
      "name":"Example 15",
      "details":"Example Details 15",
      "date":"2017-08-10T07:00:00.000Z",
      "start time ":"1899-12-31T16:00:00.000Z",
      "end time":"1899-12-31T19:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Games"
   },
   {
      "name":"Example 16",
      "details":"Example Details 16",
      "date":"2017-08-11T07:00:00.000Z",
      "start time ":"1899-12-31T17:00:00.000Z",
      "end time":"1899-12-31T20:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Historical/Culture/Informative"
   },
   {
      "name":"Example 17",
      "details":"Example Details 17",
      "date":"2017-08-12T07:00:00.000Z",
      "start time ":"1899-12-31T18:00:00.000Z",
      "end time":"1899-12-31T21:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Artsy"
   },
   {
      "name":"Example 18",
      "details":"Example Details 18",
      "date":"2017-08-13T07:00:00.000Z",
      "start time ":"1899-12-31T19:00:00.000Z",
      "end time":"1899-12-31T22:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Beauty"
   },
   {
      "name":"Example 19",
      "details":"Example Details 19",
      "date":"2017-08-14T07:00:00.000Z",
      "start time ":"1899-12-31T20:00:00.000Z",
      "end time":"1899-12-31T23:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 20",
      "details":"Example Details 20",
      "date":"2017-08-15T07:00:00.000Z",
      "start time ":"1899-12-31T21:00:00.000Z",
      "end time":"1900-01-01T00:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Activities",
      "category 2":"Fancy(pricey)"
   },
   {
      "name":"Example 21",
      "details":"Example Details 21",
      "date":"2017-08-16T07:00:00.000Z",
      "start time ":"1899-12-31T22:00:00.000Z",
      "end time":"1900-01-01T01:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Casual"
   },
   {
      "name":"Example 22",
      "details":"Example Details 22",
      "date":"2017-08-17T07:00:00.000Z",
      "start time ":"1899-12-31T23:00:00.000Z",
      "end time":"1900-01-01T02:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Breakfast"
   },
   {
      "name":"Example 23",
      "details":"Example Details 23",
      "date":"2017-08-18T07:00:00.000Z",
      "start time ":"1900-01-01T00:00:00.000Z",
      "end time":"1900-01-01T03:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Brunch"
   },
   {
      "name":"Example 24",
      "details":"Example Details 24",
      "date":"2017-08-19T07:00:00.000Z",
      "start time ":"1900-01-01T01:00:00.000Z",
      "end time":"1900-01-01T04:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Lunch"
   },
   {
      "name":"Example 25",
      "details":"Example Details 25",
      "date":"2017-08-20T07:00:00.000Z",
      "start time ":"1900-01-01T02:00:00.000Z",
      "end time":"1900-01-01T05:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dinner"
   },
   {
      "name":"Example 26",
      "details":"Example Details 26",
      "date":"2017-08-21T07:00:00.000Z",
      "start time ":"1900-01-01T03:00:00.000Z",
      "end time":"1900-01-01T06:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dessert"
   },
   {
      "name":"Example 27",
      "details":"Example Details 27",
      "date":"2017-08-22T07:00:00.000Z",
      "start time ":"1900-01-01T04:00:00.000Z",
      "end time":"1900-01-01T07:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Romantic"
   },
   {
      "name":"Example 28",
      "details":"Example Details 28",
      "date":"2017-08-23T07:00:00.000Z",
      "start time ":"1900-01-01T05:00:00.000Z",
      "end time":"1900-01-01T08:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Food Truck"
   },
   {
      "name":"Example 29",
      "details":"Example Details 29",
      "date":"2017-08-24T07:00:00.000Z",
      "start time ":"1900-01-01T06:00:00.000Z",
      "end time":"1900-01-01T09:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fast Food"
   },
   {
      "name":"Example 30",
      "details":"Example Details 30",
      "date":"2017-08-25T07:00:00.000Z",
      "start time ":"1900-01-01T07:00:00.000Z",
      "end time":"1900-01-01T10:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 31",
      "details":"Example Details 31",
      "date":"2017-08-26T07:00:00.000Z",
      "start time ":"1900-01-01T08:00:00.000Z",
      "end time":"1900-01-01T11:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fancy"
   },
   {
      "name":"Example 32",
      "details":"Example Details 32",
      "date":"2017-08-27T07:00:00.000Z",
      "start time ":"1900-01-01T09:00:00.000Z",
      "end time":"1900-01-01T12:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Casual"
   },
   {
      "name":"Example 33",
      "details":"Example Details 33",
      "date":"2017-08-28T07:00:00.000Z",
      "start time ":"1900-01-01T10:00:00.000Z",
      "end time":"1900-01-01T13:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Breakfast"
   },
   {
      "name":"Example 34",
      "details":"Example Details 34",
      "date":"2017-08-29T07:00:00.000Z",
      "start time ":"1900-01-01T11:00:00.000Z",
      "end time":"1900-01-01T14:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Brunch"
   },
   {
      "name":"Example 35",
      "details":"Example Details 35",
      "date":"2017-08-30T07:00:00.000Z",
      "start time ":"1900-01-01T12:00:00.000Z",
      "end time":"1900-01-01T15:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Lunch"
   },
   {
      "name":"Example 36",
      "details":"Example Details 36",
      "date":"2017-08-31T07:00:00.000Z",
      "start time ":"1900-01-01T13:00:00.000Z",
      "end time":"1900-01-01T16:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dinner"
   },
   {
      "name":"Example 37",
      "details":"Example Details 37",
      "date":"2017-09-01T07:00:00.000Z",
      "start time ":"1900-01-01T14:00:00.000Z",
      "end time":"1900-01-01T17:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Dessert"
   },
   {
      "name":"Example 38",
      "details":"Example Details 38",
      "date":"2017-09-02T07:00:00.000Z",
      "start time ":"1900-01-01T15:00:00.000Z",
      "end time":"1900-01-01T18:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Romantic"
   },
   {
      "name":"Example 39",
      "details":"Example Details 39",
      "date":"2017-09-03T07:00:00.000Z",
      "start time ":"1900-01-01T16:00:00.000Z",
      "end time":"1900-01-01T19:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Food Truck"
   },
   {
      "name":"Example 40",
      "details":"Example Details 40",
      "date":"2017-09-04T07:00:00.000Z",
      "start time ":"1900-01-01T17:00:00.000Z",
      "end time":"1900-01-01T20:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fast Food"
   },
   {
      "name":"Example 41",
      "details":"Example Details 41",
      "date":"2017-09-05T07:00:00.000Z",
      "start time ":"1900-01-01T18:00:00.000Z",
      "end time":"1900-01-01T21:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Inexpensive"
   },
   {
      "name":"Example 42",
      "details":"Example Details 42",
      "date":"2017-09-06T07:00:00.000Z",
      "start time ":"1900-01-01T19:00:00.000Z",
      "end time":"1900-01-01T22:00:00.000Z",
      "link":"http://scriptmedia.biz",
      "category 1":"Food",
      "category 2":"Fancy"
   },
   {
      "name":"",
      "details":"",
      "date":"",
      "start time ":"",
      "end time":"",
      "link":"",
      "category 1":"",
      "category 2":"Fusion/Exotic"
   }
];
  FilterFactory.filteredResults = [];
  FilterFactory.activitiesButtons = [
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
  FilterFactory.foodButtons = [
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

  /* FUNCTIONS */
  /************** Category Selection Filter *****************/
  function findCatOne(category){

    // Filter by the first category selection
    FilterFactory.filteredResults = FilterFactory.results.filter(function(FilterFactory.results){
      return FilterFactory.results["category 1"] === category;
    });

    // TEST
      // Origional length of the events array and resulting FilterFactory.filteredResults length.
    console.log("*************** findCatOne func ***************")
    console.log("Total Num of events: ", FilterFactory.results.length);
    console.log("Total Num of events after filter: ", FilterFactory.filteredResults.length);
    console.log(FilterFactory.filteredResults);
    // TEST END

    // Show buttons based on category 1 selection
    if(category === "Activities"){
      console.log("This is the ACTIVITIES array, now filter for buttons: ");
      console.log(JSON.stringify(FilterFactory.filteredResults));
      for(var i = 0; i < FilterFactory.activitiesButtons.length; i++){
        var buttonDiv = document.getElementById('catTwoButtons');
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-primary')
        button.setAttribute('onclick', 'findCatTwo(this.id)');
        button.setAttribute('id', FilterFactory.activitiesButtons[i]);
        button.innerHTML = FilterFactory.activitiesButtons[i];
        buttonDiv.appendChild(button);
      }// End for loop

    }else if(category === "Food"){
      console.log("This is the FOOD array, now filter for buttons: ");
      console.log(JSON.stringify(FilterFactory.filteredResults));
      for(var i = 0; i < FilterFactory.foodButtons.length; i++){
        var buttonDiv = document.getElementById('catTwoButtons');
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-primary')
        button.setAttribute('onclick', 'findCatTwo(this.id)');
        button.setAttribute('id', FilterFactory.foodButtons[i]);
        button.innerHTML = FilterFactory.foodButtons[i];
        buttonDiv.appendChild(button);
      }// End for loop 
    }else{
      console.log("Not Set")
    };

  }// End findCatOne()

  function findCatTwo(category){

    // TEST
      // See if category one array is set
    console.log("*************** findCatTwo func ***************")

    console.log("* passed in start *")
    console.log("This is FilterFactory.filteredResults", FilterFactory.filteredResults);
    console.log(FilterFactory.filteredResults.length);
    console.log("* passed in end *")

    // Filter category one array by category two selection
    FilterFactory.filteredResults = FilterFactory.filteredResults.filter(function(item){
      return item["category 2"] === category;
    });

    // TEST START
      // Test to see if category two array is set
    console.log("FilterFactory.filteredResults", FilterFactory.filteredResults)
    console.log("FilterFactory.filteredResults length", FilterFactory.filteredResults.length);
    // TEST END

    // Get random item from FilterFactory.filteredResults and display
    var randomNum = getRandomInt(0, FilterFactory.filteredResults.length);

    // Create Event Title and Link
    var resultsDiv = document.getElementById('results');
      // Title
    var resultName = document.createElement('span');
    resultName.setAttribute('id', 'name');
    resultName.innerHTML = FilterFactory.filteredResults[randomNum]['name'];
      // Link
    var resultLink = document.createElement('a')
    resultLink.setAttribute('href', FilterFactory.filteredResults[randomNum]['link'])
    resultLink.setAttribute('id', 'link')
    resultLink.setAttribute('target', '_blank');
    resultLink.innerHTML = "Click here to visit link";

    // Close search box
    $('#search').removeClass('open');

    // Show Event Info
    resultsDiv.appendChild(resultName).appendChild(resultLink);
    // Show the clear button
    $('#clearButton').toggleClass('hide');


  }// End findCatTwo()

  function clearSearch(){
    // Reset the events filtered arr
    FilterFactory.filteredResults = [];

    // Remove cat two buttons
    var catTwoRow = document.getElementById('catTwoButtons');
    catTwoRow.innerHTML = '';

    // Remove search result
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    $('#clearButton').toggleClass('hide');
  }// End clearSearch()
  /************** Helper Functions *****************/
  function getRandomInt(min, max){
      var min = Math.ceil(min), max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
  };

  
 return FilterFactory;
});