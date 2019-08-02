$(document).ready(function () {

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

    let hunted = "";

    $("#game-search-btn").on("click", function () {

        hunted = $("game-search").val().trim();

        database.ref().set({ searchedGame: hunted })

        $("game-search").val("");
    });

    function RadaRada() {

        let queryURL = 'https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/search/streams?query=' + hunted;
        $.ajax({
            url: queryURL,
            headers: { "Client-ID": "9b0njddb6vtmna80nklh2bna9y52v7" },
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    };

    database.ref().on("value", function (snap) {

        hunted = snap.val();

        RadaRada();
    });
});