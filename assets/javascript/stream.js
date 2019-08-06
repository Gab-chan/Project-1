$(document).ready(function () {

    $("#game-input-btn").on("click", function () {

        event.preventDefault();

        let hunted = $("#game-input").val();

        let queryURL = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/search/streams?query=" + hunted;

        $.ajax({
            url: queryURL,
            headers: { "Client-ID": "9b0njddb6vtmna80nklh2bna9y52v7" },
            method: "GET"
        }).then(function (response) {
            console.log(response);

            let streamList = $("<div>").addClass("row");

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
                let leftSide = $("<div>").attr("class", "column col-md-3");
                let rightSide = $("<div>").attr("class", "column col-md-9");

                // logo generation
                let logo = $("<img>").attr("src", streamLogo);
                logo.attr("alt", "Streamer logo");
                logo.attr("class", "stream-logo");

                // information to HTML bridge
                let name = $("<div>").text(streamerName);

                let game = $("<div>").text(streamGame);

                // time conversion for the start of the stream
                let startTime = $("<div>");
                let unixTimeStart = moment(streamStart).format("X");
                let localTimeStart = moment.unix(unixTimeStart).format("HH:mm");
                startTime.text("started at " + localTimeStart + " your time, military format");

                // creates the link to be added to the streamer card
                let link = $("<div>");
                let source = $("<a>").attr("href", streamLink)
                source.text(streamLink)
                link.append(source);


                let viewers = streamViewers + " viewing this stream currently";

                // stacks the information
                leftSide.append(logo);
                leftSide.addClass("innerstrCard")
                rightSide.append(
                    name,
                    game,
                    startTime,
                    link,
                    viewers
                );
                rightSide.addClass("innerstrCard")
                
                // adds both side to the streamer card
                stream.append(
                    leftSide,
                    rightSide
                );
                stream.attr("class", "stream-card");
                
                //adds streamer card to the list div
                streamList.append(stream);
            }

            // once completed, the list is added to its place, and replaces the previous list if there was one.
            $(".streamforgame").empty();
            $(".streamforgame").prepend(streamList);
        });

        $("#game-input").val("");
    });

});