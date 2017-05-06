import { templatesLoader } from 'templatesLoader';
import { DataOMDBController } from "dataOMDBManager";
import * as constantManager from 'constants';
import * as data from 'data';

const OMDBController = new DataOMDBController();
const $contentDiv = $('#content-container');
const keyWords = constantManager.getWords();

function getAllMovies() {
    const resultArray = [];

    keyWords.forEach(word => {
        let currentRequestURL = `http://www.omdbapi.com/?t=${word}&y=2017&type=movie`;
        let currentMovies = OMDBController.getNewestMovies(currentRequestURL);
        resultArray.push(currentMovies);
    });

    //filter for n/a props
    return resultArray.map(function(x) {
        for (var i in x) {
            if (x[i] === "N/A") {
                delete x[i];
            }
        }
        x["data"] = JSON.stringify(x);
        return x;
    });
}

export function showNewestMovies() {
    templatesLoader.get('movies')
        .then(template => {
            let movies = getAllMovies();
            console.log(movies);
            let result = template(movies);
            $contentDiv.html(result);
            getTopLikedOrDislikedMoviesSorted({ numberOfMovies: 5, liked: true })
                .then(function(res) {
                    templatesLoader.get('topMovies')
                        .then(function(template) {
                            if (res) {
                                var dataToRender = movies.filter(x => res.indexOf(x["imdbID"]) >= 0);
                                $("#top-movies").html(template(dataToRender));
                            } else {
                                $("#top-movies").html("<h2 class='title center'>Currently no Top Movies</h2>");
                            }
                            $(".current-movie.clickable").on("click", function() {
                                var data = $(this).children("div.data").text();
                                window.location.href = "#/movie/" + encodeURIComponent(data);
                            });
                        });
                });
        });
}

export function seeMovie(param) {
    var movie = JSON.parse(param["moviedata"]);
    data.getMovie(movie.imdbID)
        .then(function(res) {
            var movieData = res;
            data.getMoviesComments(movieData.ImdbID)
                .then(function(comments) {
                    console.log(comments);
                    console.log(movieData);
                    templatesLoader.get('movie')
                        .then(function(template) {

                        });
                });

        });
}

function getTopLikedOrDislikedMoviesSorted({ numberOfMovies, liked }) {
    var dataToUse;
    return data.getTopLikedOrDislikedMovies({ numberOfMovies, liked });
}