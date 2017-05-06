import { templatesLoader } from 'templatesLoader';
import { DataOMDBController } from "dataOMDBManager";

const OMDBController = new DataOMDBController();
const $contentDiv = $('#content-container');

export function showNewestMovies() {
    templatesLoader.get('movies')
        .then(template => {
            let movies = OMDBController.getAllMovies();
            console.log(movies);
            let result = template(movies);
            $contentDiv.html(result);
        })
}


export function getOscarMovies() {
    templatesLoader.get('movies')
        .then(template => {
            let movies = OMDBController.getOscarMovies();
            console.log(movies);
            let result = template(movies);
            $contentDiv.html(result);
        })
}

export function getUpcomingMovies() {
    templatesLoader.get('movies')
        .then(template => {
            let movies = OMDBController.getUpcomingMovies();
            console.log(movies);
            let result = template(movies);
            $contentDiv.html(result);
        })
}

export function getByActor() {

    let actorName = $('.actor').val();

    if (actorName !== "") {
        templatesLoader.get('movies')
            .then(template => {
                let movies = OMDBController.getMoviesByActor(actorName);
                console.log(movies);
                let result = template(movies);
                $contentDiv.html(result);
                $('.actor').val();
                location.hash = "#/movies/actor/search";
            })
    } else {
        location.hash = "#/movies";
    }
}

export function getByGenre() {

    let genreName = $('.genre').val();

    if (genreName !== "") {
        templatesLoader.get('movies')
            .then(template => {
                let movies = OMDBController.getMoviesByGenre(genreName);
                console.log(movies);
                let result = template(movies);
                $contentDiv.html(result);
                $('.genre').val();
                location.hash = "#/movies/genre/search";
            })
    } else {
        location.hash = "#/movies";
    }
}