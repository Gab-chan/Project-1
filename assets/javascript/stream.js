$(document).ready(function () {
    

    let queryURL = 'https://api.twitch.tv/helix/streams?first=10';

    function RadaRada() {
        $.ajax({
            url: queryURL,
            method: "GET",
            header: {"Client-ID": "9b0njddb6vtmna80nklh2bna9y52v7"},
        }).then(function (response) {          
            console.log(response);
        });
    }

    RadaRada();

});