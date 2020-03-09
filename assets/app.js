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

    var topics = [];


    $('#search-btn').on('click', function (event) {
        event.preventDefault();

        var searchInput = $('#searchbox').val().trim(); //retrieve text input form the user
        topics.push(searchInput); //push it to the array 
        console.log(topics);
        $('#searchbox').val(''); //clear the search box

        for (var i = 0 ; i < topics.length ; i++ ) {    //Loop through the array and add button to each item in the array
            console.log(topics[i]);
        var button = $('<button type="button" id="movieBtn" class="btn btn-info">' + topics[i] + '</button>');
        $('#popup-btn').append(button);
        } 

    }); 























    















});