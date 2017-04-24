import { Datas } from "./data.js";

// Insert keywords in this array so u can get movies from the database we can put it inside the function ??? or live it here ??
// Dont know what is better practice...Feel free to add more keywords....
let keyWordsArray = ["hero", "last", "ball", "sport", "flower", "thor", "superman", "justice",
    "the", "one", "two", "now", "you", "see", "kill", "die", "reborn", "regeneration", "degeneration", "power", "air", "earth", "magic", "spell", "show", "shot", "family", "shot", "store", "tears", "joy", "furious", "fast",
    "river", "pray", "music", "kingdom", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "edge", "tommorow", "yesterday", "house", "smile",
    "laser", "spider", "man", "super", "sun", "genious", "smart", "movie", "ghost", "shell", "plastic", "skin", "live", "pirates", "pirate", "drink", "rage", "against", "civil", "war", "captain", "white", "yellow",
    "green", "red", "blue", "pink", "black", "purple", "orange",
    "user", "plot", "type", "title", "year", "season", "episode", "actors", "celebrities", "events", "comedy",
    "horror", "action", "adventure", "animation", "war", "romance", "war", "post", "die", "hard", "never", "surrender", "prince",
    "reasons", "why", "guardians", "riddick", "harry", "Los", "Babylon", "xXx", "Pitch Black"
];

// Testing...
let data = new Datas(keyWordsArray);
let result = data.getNewestMovies();
let resultByActor = data.getMoviesByActor("Vin Diesel");
let resultByRating = data.getMoviesByRating(8);
let resultTopRatingMovies = data.getTopRatingMovies();
let resultOscarMovies = data.getOscarMovies();

console.log(result);
console.log(resultByActor);
console.log(resultByRating);
console.log(resultTopRatingMovies);
console.log(resultOscarMovies);