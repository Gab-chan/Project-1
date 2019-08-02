$(document).ready(function () {

    $("#game-search-btn").on("click", function () {

        event.preventDefault();

        let hunted = $("#game-search").val();

        $("#game-search").val("");

        let queryURL = 'https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/search/streams?query=' + hunted;

        $.ajax({
            url: queryURL,
            headers: { "Client-ID": "9b0njddb6vtmna80nklh2bna9y52v7" },
            method: "GET"
        }).then(function (response) {
            console.log(response);

            for (i = 0; i < response.streams.length; i++) {

                let stream = $("<div>");
                let streamerName = response.streams[i].channel.display_name;
                let streamLink = response.streams[i].channel.url;
                let streamStart = response.streams[i].created_at;
                let streamGame = response.streams[i].game;
                let streamLogo = response.streams[i].channel.logo;

                // logo generation
                let logo = $("<img>").attr("src", streamLogo);
                logo.attr("alt", "Streamer logo");

                let name = $("<div>").text(streamerName);

                let game = $("<div>").text(streamGame);

                let startTime = $("<div>").text(streamStart);

                let link = $("<div>");

                // stacks the information
                stream.append(
                    logo,
                    name,
                    game,
                    startTime,
                    link
                );
                
                $(".big2").append(stream);
            }


        });

        
    });




});