import * as requester from './requester.js';

class Datas {
    constructor(keyWordsArray) {
        this.keyWordsToSearch = keyWordsArray;
    }

    getNewestMovies() {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&y=2017&type=movie`;

            requester.get(currentRequestURL)
                .then(result => {
                    resultMovies.push(result);
                });
        });

        return resultMovies;
    }

    getMoviesFromPreviousYears(previousYear) {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&y=${previousYear}}&type=movie`;

            requester.get(currentRequestURL)
                .then(result => {
                    resultMovies.push(result);
                });
        });

        return resultMovies;
    }

    getMoviesByRating(rating) {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&type=movie`;

            requester.get(currentRequestURL)
                .then(result => {
                    if (result.Poster && result.imdbRating == rating)
                        resultMovies.push(result);
                });
        });

        return resultMovies;
    }

    getTopRatingMovies() {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&type=movie`;

            requester.get(currentRequestURL)
                .then(result => {
                    if (result.Poster && result.imdbRating >= 8)
                        resultMovies.push(result);
                });
        });

        return resultMovies;
    }

    getOscarMovies() {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&type=movie`;

            requester.get(currentRequestURL)
                .then(result => {
                    if (result.Poster && result.Awards.toLowerCase().includes("oscars"))
                        resultMovies.push(result);
                });
        });

        return resultMovies;
    }

    getMoviesByActor(actorName) {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&type=movie`;

            requester.get(currentRequestURL)
                .then(result => {
                    if (result.Poster && result.Actors.toLowerCase().includes(actorName.toLowerCase()))
                        resultMovies.push(result);
                });
        });

        return resultMovies;
    }
}

export { Datas };