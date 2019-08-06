$(document).ready(function () {
    $(".gamelistbox").hide();
    $(".bscontainer").show();

});


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



var ref = firebase.database().ref().child('/searchedGames');


$(".submit").on("click", function (event) {
    $(".submit").trigger("blur");
    event.preventDefault();
    var gamesearch = $("#game-input").val().trim();
    gamesearch = gamesearch.split(" ").join('&search=');

    $(".gamebox").show();
    $(".gamelistbox").show();
    $(".bscontainer").hide();

    if ($("input:text").val().length === 0) {
        $(".bscontainer").show();
        $(".gamelistbox").hide();
        $(".searchbar").addClass("warning");
        // $(".searchbar").css({'border': '1px solid red'});

        setTimeout(function () {
            $(".searchbar").removeClass("warning");
        }, 2500);
    }

    // $("input:text").text(function () { $(this).val("") });

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

            $(".gameimg").html(gameImg);
            $(".gamename").html(response.products[0].albumTitle)
            $(".gamedesc").html(response.products[0].longDescription);
            $(".gameprice").html("Price: " + response.products[0].salePrice + " -");
            $(".buynow").appendTo(".gameprice");

            $(gameImg).attr("height", "400px");
            $(gameImg).attr("width", "400px");


            database.ref().child("searched-games").push({
                gamesearch: gamesearch
            });

        })
});

var queryURL = "https://api.bestbuy.com/v1/products((search=Games)&(categoryPath.id=pcmcat300300050002))?apiKey=lig8iC6qhgDZu9pSlKu3IInC&sort=bestSellingRank.asc&show=name,bestSellingRank,image,addToCartUrl&pageSize=5&format=json";

$.ajax({
    url: queryURL,
    method: "GET"
})


    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {


        // Log the queryURL
        console.log(queryURL);
        console.log(response);

        var best1 = $("<img>").attr("src", response.products[0].image);
        var best2 = $("<img>").attr("src", response.products[1].image);
        var best3 = $("<img>").attr("src", response.products[2].image);
        var best4 = $("<img>").attr("src", response.products[3].image);
        var best5 = $("<img>").attr("src", response.products[4].image);

        $(".topimg1").append(best1);
        $(".topname1").append(response.products[0].name);
        $(".topimg2").append(best2);
        $(".topname2").append(response.products[1].name);
        $(".topimg3").append(best3);
        $(".topname3").append(response.products[2].name);
        $(".topimg4").append(best4);
        $(".topname4").append(response.products[3].name);
        $(".topimg5").append(best5);
        $(".topname5").append(response.products[4].name);

        $(best1).attr("height", "175px");
        $(best1).attr("width", "175px");
        $(best2).attr("height", "175px");
        $(best2).attr("width", "175px");
        $(best3).attr("height", "175px");
        $(best3).attr("width", "175px");
        $(best4).attr("height", "175px");
        $(best4).attr("width", "175px");
        $(best5).attr("height", "175px");
        $(best5).attr("width", "175px");



    });



            // var cloned = $('.gamelistbox').first().clone();
            // cloned.insertAfter(".gamelistbox");




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

