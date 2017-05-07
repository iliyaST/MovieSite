import * as requester from './requester.js';
import * as constantManager from 'constants';

class DataOMDBController {

    getAllMovies() {
        const keyWords = constantManager.getWords();
        const resultArray = [];

        keyWords.forEach(word => {
            let currentRequestURL = `http://www.omdbapi.com/?t=${word}&y=2017&type=movie`;
            let currentMovies = requester.getM(currentRequestURL);
            if (currentMovies.Poster != "N/A" && currentMovies.Poster != "") {
                resultArray.push(currentMovies);
            }
        });

        return resultArray.map(function(x) {
            //delete all props that are n/a
            for (var i in x) {
                if (x[i] === "N/A") {
                    delete x[i];
                }
            }
            x["data"] = JSON.stringify(x);
            return x;
        });
    }


    getOscarMovies() {
        const keyWords = constantManager.getWords();
        const resultArray = [];

        keyWords.forEach(keyWord => {
            var currentRequestURL = `http://www.omdbapi.com/?t=${keyWord}&type=movie`;
            let currentMovies = requester.getM(currentRequestURL);

            if (currentMovies.Awards && currentMovies.Awards != "N/A" && currentMovies.Poster != "N/A" && currentMovies.Poster != "") {
                let result = currentMovies.Awards;
                if (result.indexOf("Oscar") > -1) {
                    resultArray.push(currentMovies);
                }
            }
        });

        return resultArray;
    }

    getUpcomingMovies() {
        const keyWords = constantManager.getWords();
        const resultArray = [];

        keyWords.forEach(word => {
            let currentRequestURL = `http://www.omdbapi.com/?t=${word}&y=2018&type=movie`;
            let currentMovies = requester.getM(currentRequestURL);
            if (currentMovies.Poster != "N/A" && currentMovies.Poster != "") {
                resultArray.push(currentMovies);
            }
        })

        return resultArray;
    }

    getMoviesByActor(actorName) {
        const keyWords = constantManager.getWords();
        const resultArray = [];

        keyWords.forEach(word => {
            let currentRequestURL = `http://www.omdbapi.com/?t=${word}&type=movie`;
            let currentMovies = requester.getM(currentRequestURL);
            if (currentMovies.Poster != "N/A" && currentMovies.Poster != "") {
                if (currentMovies.Actors && currentMovies.Actors.toLowerCase().includes(actorName.toLowerCase())) {
                    resultArray.push(currentMovies);
                }
            }
        })

        return resultArray;
    }

    getMoviesByGenre(genre) {
        const keyWords = constantManager.getWords();
        const resultArray = [];

        keyWords.forEach(word => {
            let currentRequestURL = `http://www.omdbapi.com/?t=${word}&type=movie`;
            let currentMovies = requester.getM(currentRequestURL);
            if (currentMovies.Poster != "N/A" && currentMovies.Poster != "") {
                if (currentMovies.Genre && currentMovies.Genre.toLowerCase().includes(genre.toLowerCase())) {
                    resultArray.push(currentMovies);
                }
            }
        })

        return resultArray;
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
}

export { DataOMDBController };