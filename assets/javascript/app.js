$( document ).ready(function() {
    $(".gamebox").hide();
})


var config = {
    apiKey: "AIzaSyBkQLTirJjsxhFrTzi6E2okJBJaJzs7UHY",
    authDomain: "project-1-f809e.firebaseapp.com",
    databaseURL: "https://project-1-f809e.firebaseio.com",
    projectId: "project-1-f809e",
    storageBucket: "",
    messagingSenderId: "1000072791220",
    appId: "1:1000072791220:web:afef53e16c957cea"
};


firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
var gamesearch = "";

$(".submit").on("click", function (event) {
    event.preventDefault();
    var gamesearch = $("#game-input").val();
    $(".gamebox").show();
    $("input:text").text(function () { $(this).val("") });

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.bestbuy.com/v1/products((search=" + gamesearch + ")&(categoryPath.id=pcmcat300300050002))?apiKey=lig8iC6qhgDZu9pSlKu3IInC&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    })


        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);
            console.log(response);

                var gameImg = $("<img>").attr("src", response.products[0].image);

                $(".gameimg").append(gameImg);
                $(".gamename").html(response.products[0].albumTitle)
                $(".gamedesc").html(response.products[0].longDescription);
                $(".gameprice").html("Price: " + response.products[0].salePrice);
                $(".gameaddons").html("Other Additions " + response.products[2].name);

                $(gameImg).attr("height", "400px")
                $(gameImg).attr("width", "400px")

             
            })
        })


            // for (var i = 0; i < response.products.length; i++) {
            //     console.log(response.products[0].image)
            //     var gameImg = $("<img>").attr("src", response.products[i].image);

            //     $(gameImg).attr("height", "140px")
            //     $(gameImg).attr("width", "160px")

            //     $(".gamebox").clone().appendTo(".gamecontainer");
            //     $(".gamename").html(response.products[i].albumTitle)
            //     $(".gamedesc").html(response.products[i].shortDescription);
            //     $(".gameprice").html(response.products[i].salePrice);
            //     $(".gamecontainer").append(gameimg)

            // $(gameImg).width(160);
            // $(gameImg).height(140);




                // arr = [
                //     response.products[i].albumTitle,
                //     response.products[i].shortDescription,
                //     response.products[i].salePrice
                // ];





          //   $(".gameimg").clone().appendTo(".gamebox2");
    //   });


    //   for (var i = 0; i < response.products.length; i++) {
    //   $(".gamename").append("Game: " + JSON.stringify(response.products[i].name));
    //   console.log(response.products[i].name)

    //   }



//     for (var i = 0; i < response.products.length; i++) {
//     $("").append(JSON.stringify(response.products[0].albumTitle));
// console.log(response.products[i].albumTitle)

