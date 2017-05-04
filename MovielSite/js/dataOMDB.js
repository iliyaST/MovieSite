import * as requester from './requester.js';

class DataOMDBController {

    getNewestMovies(currentRequestURL) {
        return requester.getM(currentRequestURL);
    }

    getMoviesByGenre(genre) {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            let currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&type=movie`;

            requester.get(currentRequestURL)
                .then(result => {
                    if (result.Poster && result.Genre.toLowerCase().includes(genre.toLowerCase())) {
                        resultMovies.push(result);
                    }
                });
        })

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

    getUpcomingMovies() {
        let resultMovies = [];

        this.keyWordsToSearch.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&y=2018&type=movie`;

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

export { DataOMDBController };