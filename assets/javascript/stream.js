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

            let streamList = $("<div>");

            for (i = 0; i < response.streams.length; i++) {

                // generation of information from the response
                let stream = $("<div>").attr("class", "row");
                let streamerName = response.streams[i].channel.display_name;
                let streamLink = response.streams[i].channel.url;
                let streamStart = response.streams[i].created_at;
                let streamGame = response.streams[i].game;
                let streamLogo = response.streams[i].channel.logo;
                let streamViewers = response.streams[i].viewers;

                // formatting of streamer block
                let leftSide = $("<div>").attr("class", "column col-md-2");
                let rightSide = $("<div>").attr("class", "column col-md-10");

                // logo generation
                let logo = $("<img>").attr("src", streamLogo);
                logo.attr("alt", "Streamer logo");
                logo.attr("class", "stream-logo");

                // information to HTML bridge
                let name = $("<div>").text(streamerName);

                let game = $("<div>").text(streamGame);

                let startTime = $("<div>");
                let unixTimeStart = moment(streamStart).format("X");
                let localTimeStart = moment.unix(unixTimeStart).format("HH:MM");
                startTime.text("started at " + localTimeStart + " your time, military format");

                let link = $("<div>");
                let source = $("<a>").attr("href", streamLink)
                source.text(streamLink)
                link.append(source);

                let viewers = streamViewers + " viewing this stream currently";

                // stacks the information
                leftSide.append(logo);
                rightSide.append(
                    name,
                    game,
                    startTime,
                    link,
                    viewers
                );

                stream.append(
                    leftSide,
                    rightSide
                );


                streamList.append(stream);
            }
            $(".big2").empty();
            $(".big2").append(streamList);
        });


    });




});