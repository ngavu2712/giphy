/* PSEUDOCODE:

JS jQuery Work
    Create an array of string with topics of interst (movies)
    Using JS and jQuery to link the input from search box to the array, so the input will add items to the topics array
    Creating button for the items using JS
    Applying loop over the array so the button will be appended to each item

Retrieve Data from GIPHY using API Key 
    Acquire API Key from GIPHY app
    Apply AJAX, API Key, queryURL, .then(function(response)) to retrieve the data from GIPHY

PopUp Button 
    User click into one button to acquire 10 static gif and place them on the id=gif
    
Animation of GIF
    Apply data-still and data-animate on the gif picture, user click on one picture and animation start, second click it pauses

*/


$(document).ready(function() {

//JS and jQuery Work

    var topics = []; //Create an empty array
    var buttonCount = 0;

    //SEARCH CLICK event 
    $('#search-btn').on('click', function (event) {         
        event.preventDefault(); //prevent the browser from reloading

        var searchInput = $('#searchbox').val().trim(); //retrieve text input from the user
        topics.unshift(searchInput); //Add new item to the beginning of the array
    
        console.log(topics);
        $('#searchbox').val(''); //clear the search box

       $('#popup-btn').empty(); //empty the popup-btn div before looping the array, or else for loop will loop over the entire array

        for (var i = 0 ; i < topics.length ; i++ ) {    //Loop through the array and add button to each item in the array
            var button = $('<button type="button" id="movieBtn"class="btn btn-info">' + topics[i]+ '</button>');
            console.log(topics[i]);
            $('#popup-btn').append(button);
        }

    }); 

//Retrieve data using AJAX and API + BUTTON CLICK EVENT

$('button').on('click' , function () { 

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=HD8aqxdjXpLQMq0OBrTB0LWnEtvhgUZl";

})



    
  





















    















});