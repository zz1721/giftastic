var topics = ["Crying", "Anger","WTF?","Litty", "Celebration"]

// Code something that turns the array into buttons
$(document).ready(function() {

var topics = ["Crying","Anger","WTF?","Litty", "Skrrrrrr"]

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

$(document).on("click",function(){
alert("clicked");

    var gifName = $(this).attr("data-name");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gifName + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
                       // Creating a div for the gif
                       var divvy = $("<div>");

                    //    // Storing the result item's rating
                       var rating = response.data[i].rating;
         
                    //    // Creating a paragraph tag with the result item's rating
                       var p = $("<p>").text("Rating: " + rating);
         
                    // 

                    // var animated = response.data[i].images.fixed_height.url;

                    var still= response.data[i].images.fixed_height_still.url;
                    
                    // Creating an image tag
                       var gifImage = $("<img>");

                       gifImage.attr("src", still);
                    //    gifImage.attr("data-still", still);
                    //    gifImage.attr("data-animated", animated);
                    //    gifImage.attr("data-state", "still");

                    gifImage.append()
                       gifImage.addClass("searchImage");
                       divvy.append(p);
                       divvy.append(gifImage);
                       $("#gifs").append(divvy)

                       


         
                    //    // Giving the image tag an src attribute of a proprty pulled off the
                    //    // result item
                    //    personImage.attr("src", results[i].images.fixed_height.url);
         
                    //    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    //    gifDiv.append(p);
                    //    gifDiv.append(personImage);
         
                    //    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    //    $("#gifs-appear-here").prepend(gifDiv);
                    //  }

        }

      })
      })
    
    })


