$(document).ready(function () {

    let queryURL = 'https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/search/streams?query=destiny%202';

    function RadaRada() {
        $.ajax({
            url: queryURL,
            headers: {"Client-ID": "9b0njddb6vtmna80nklh2bna9y52v7"},
            method: "GET"
        }).then(function (response) {          
            console.log(response);
        });
    }

    RadaRada();

});