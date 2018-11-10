var topics = ["Crying", "Anger","WTF?","Litty", "Celebration"]

// Code something that turns the array into buttons
$(document).ready(function() {

var topics = ["Crying","Anger","WTF?","Litty", "Celebration"]

function mybuttons(){
for (var i = 0; i < topics.length; i++) {
    $("#gifbuttons").append('<button class="gif-btn btn btn-danger" data-name="' + topics[i] + '">' + topics [i])
}
  }
mybuttons();
// for (var i = 0; i < topics.length; i++) {
//     var topicBtn = $("<button>");
//     topicBtn.addClass("topics-button topic topic-button-color");
//     topicBtn.attr("data-letter", topics[i]);
//     topicBtn.text(topics[i]);
//     $("#buttons").append(topicBtn);

//   }


//   $("div").html(topics)

//   $("div").html("hi")
})
$(".gif-btn").on("click",function(){
alert("clicked");
    // var gifName = $(this).attr("data-name");

    // // Constructing a queryURL using the animal name
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //   gifName + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    // // Performing an AJAX request with the queryURL
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // })
    //   // After data comes back from the request
    //   .then(function(response) {
    //     var results = response.data;

        
      })
    



