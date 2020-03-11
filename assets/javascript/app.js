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

    //SEARCH CLICK event 
    $('#search-btn').on('click', function (event) {         
        event.preventDefault(); //prevent the browser from reloading

        var searchInput = $('#searchbox').val().trim(); //retrieve text input from the user

        topics.unshift(searchInput); //Add new item to the beginning of the array
    

        $('#searchbox').val(''); //clear the search box

        $('#popup-btn').empty(); //empty the popup-btn div before looping the array, or else for loop will loop over the entire array

        for (var i = 0 ; i < topics.length ; i++ ) {    //Loop through the array and add button to each item in the array
            var button = $('<button data-movie="'+ topics[i] +'"type="button" id="movieBtn" class="btn btn-info">' + topics[i]+ '</button>');
            $('#popup-btn').append(button);
            
        }
        }); 

//Retrieve data using AJAX and API + BUTTON CLICK EVENT

    $(document.body).on('click', '#movieBtn' , function () { 


        //$('#movieBtn').on('click' , function () { 
        //console.log('movieBtn')
    
        $('#gif-display').empty();    

        var movie = $(this).attr("data-movie")
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=HD8aqxdjXpLQMq0OBrTB0LWnEtvhgUZl&limit=10"; //SET &limit=10 at the end of the API Key

            $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response){
                
            console.log(response);

            var movieResult = response.data;    //Creating movieResult variable to store the data from the response call
        
                for (var i= 0; i < movieResult.length ; i++) {  //Creating a loop for response data from GIPHY
        
                var movieDiv = $('<div>');
                var p = $('<p>');

                $(p).append('Rating:' + ' ' + movieResult[i].rating);
            
                var movieGif = $('<img class= "gif_click">');
                $(movieGif).attr("src", movieResult[i].images.fixed_height_still.url); //fixed_height_still.url make the gif appear to be still
                $(movieGif).attr({"data-animate" : movieResult[i].images.fixed_height.url}); //fixed_height.url is animated gif
                $(movieGif).attr({'data-state': 'still'});
                $(movieGif).attr({"data-still": movieResult[i].images.fixed_height_still.url});


                $(movieDiv).append(movieGif);
                $(movieDiv).append(p)

                $('#gif-display').prepend(movieDiv);

                }
            }) 
    }) 

$('img').on('click' , function() {
    console.log('img')

    var state = $(this).attr("data-state");

    if (state === 'still') {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state" , "animate");
    
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state" , "still");
    }

});



    
  





















    















});