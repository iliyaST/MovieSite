import * as requester from './requester.js';

class Datas {
    constructor() {
        this.keyWordsToSearch = ["hero", "last", "ball", "sport", "flower", "thor", "superman", "justice",
            "the", "one", "two", "now", "you", "see", "kill", "die", "reborn", "regeneration", "degeneration", "power", "air",
            "earth", "magic", "spell", "show", "shot", "family", "shot", "store", "tears", "joy", "furious", "fast",
            "river", "pray", "music", "kingdom", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
            "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "edge", "tommorow", "yesterday", "house", "smile",
            "laser", "spider", "man", "super", "sun", "genious", "smart", "movie", "ghost", "shell", "plastic", "skin", "live",
            "pirates", "pirate", "drink", "rage", "against", "civil", "war", "captain", "white", "yellow",
            "green", "red", "blue", "pink", "black", "purple", "orange",
            "user", "plot", "type", "title", "year", "season", "episode", "actors", "celebrities", "events", "comedy",
            "horror", "action", "adventure", "animation", "war", "romance", "war", "post", "die", "hard", "never", "surrender", "prince",
            "reasons", "why", "guardians", "riddick", "harry", "Los", "Babylon", "xXx", "Pitch Black", "blood", "bone", "slaive",
            "football", "cash", "money", "sex", "guns", "lord", "rings", "of", "on", "out", "to", "let", "dogs", "dog", "dog`s", "hell",
            "heaven", "boy", "blade", "runner", "smile", "age", "avengers", "transformers", "cars", "car", "truck", "trucks",
            "airplane", "airplanes", "flight", "danger", "scary", "redemtion", "ressurection", "beginning", "end", "final",
            "fetch", "style", "300", "7", "2", "3", "1", "12", "17", "23", "1000", "words", "cop", "hills",
            "Let's Be Cops", "The Final Girls", "The Tourist", "Transcendence", "Money Monster", "money", "monster",
            "Mirror mirror"
        ];
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