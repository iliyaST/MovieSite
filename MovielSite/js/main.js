import { Datas } from "./data.js";
import { MainController } from "./mainController.js";

// Testing...
let data = new Datas();
let controller = new MainController(data);

let result = controller.getNewestMovies();
let resultTopRatingMovies = controller.getTopRatingMovies();
let resultOscarMovies = controller.getOscarMovies();
let resultByActor = controller.getMoviesByActor("Julia Roberts");
let resultByRating = controller.getMoviesByRating(8);
let resultByActor1 = controller.getMoviesByActor("Julia Roberts");
let resultByGenre = controller.getMoviesByGenre("fantasy");

console.log("newest:")
console.log(result);
console.log("by actor:")
console.log(resultByActor);
console.log(resultByActor1);
console.log("by rating:")
console.log(resultByRating);
console.log("by top rating:")
console.log(resultTopRatingMovies);
console.log("Search by oscars:")
console.log(resultOscarMovies);
console.log("Search by genre:")
console.log(resultByGenre);