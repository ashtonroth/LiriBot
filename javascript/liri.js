require('dotenv').config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var action = process.argv[2];
var parameter = process.argv.splice(3).join(" ");


if (action === "movie-this" && parameter) {
    
    axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
        .then(
            function (response) {
                console.log("You didn't enter anything! If you haven't watched Mr. Nobody, then you should! It's on Netflix!")
                console.log("Title: " + response.data.Title);
                console.log("Year Released: " + response.data.Year);
                console.log("iMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Produced in: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            })
        .catch(function (error) {
            if (error.response) {
            }
        });

} else {
    axios.get("http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy")
        .then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year Released: " + response.data.Year);
                console.log("iMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Produced in: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            })
        .catch(function (error) {
            if (error.response) {
            }
        });
}
if (action === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var results = response.data
            if (results.length === 0) {
                console.log("Oh well, it doesn't look like " + parameter + " is touring! Try again.")
            } else {
                console.log("Upcoming Shows For: " + parameter);
                for (var result of results) {
                    var eventDate = moment(result.datetime).format("MMM Do YY");
                    console.log("Venue: " + result.venue.name);
                    console.log("Venue Location: " + result.venue.city + ", " + result.venue.region);
                    console.log("Event Date: " + eventDate);
                    console.log("-----------------------------")
                }
            }
        })
        .catch(function (error) {
            if (error.response) {
            }
        });
}

if (action==="spotify-this-song"){
        spotify.search({ type: "track", query: parameter }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }else{ 
      
      for (i=0; i<3; i++){
        var artistName = data.tracks.items[i].artists[0].name;
        var songName = data.tracks.items[i].name;
        var previewLink = data.tracks.items[i].preview_url;
        var albumName = data.tracks.items[i].album.name
    
        console.log("-----------------------------")
        console.log("Artist: " + artistName);
        console.log("Song Name: " + songName);
        console.log("Preview Link: " + previewLink);
        console.log("Album: " + albumName);
        console.log("-----------------------------")
      }
    }})
}
if (action == "do-what-it-says") {
    var fs = require("fs");

    //Read random.txt file
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error)
        }

        //Split data into array
        var info = data.split(",");
        for (var i = 0; i < info.length; i++) {
            console.log(info[i]);
        }
       
    })
}


    

if (action === "movie-this") {
    if (parameter === undefined) {
        axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
            .then(
                function (response) {
                    console.log("You didn't enter anything! If you haven't watched Mr. Nobody, then you should! It's on Netflix!")
                    console.log("Title: " + response.data.Title);
                    console.log("Year Released: " + response.data.Year);
                    console.log("iMDB Rating: " + response.data.imdbRating);
                    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                    console.log("Produced in: " + response.data.Country);
                    console.log("Language: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot);
                    console.log("Actors: " + response.data.Actors);
                })
            .catch(function (error) {
                if (error.response) {
                }
            });
    } else {
        axios.get("http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy")
            .then(
                function (response) {
                    console.log("Title: " + response.data.Title);
                    console.log("Year Released: " + response.data.Year);
                    console.log("iMDB Rating: " + response.data.imdbRating);
                    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                    console.log("Produced in: " + response.data.Country);
                    console.log("Language: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot);
                    console.log("Actors: " + response.data.Actors);
                })
            .catch(function (error) {
                if (error.response) {
                }
            });
    }
}
if (action === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var results = response.data
            if (results.length === 0) {
                console.log("Bummer, it doesn't look like " + parameter + " has any upcoming shows! Try another search.")
            } else {
                console.log("Upcoming Shows For: " + parameter);
                for (var result of results) {
                    var eventDate = moment(result.datetime).format("MMM Do YY");
                    console.log("Venue: " + result.venue.name);
                    console.log("Venue Location: " + result.venue.city + ", " + result.venue.region);
                    console.log("Event Date: " + eventDate);
                    console.log("-----------------------------")
                }
            }
        })


        .catch(function (error) {
            if (error.response) { }

        });



}