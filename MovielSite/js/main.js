/*jshint esversion: 6 */
import { MyRouter } from 'router';
import * as userControler from 'userControler';
import { openNearestCinema } from 'watchControler';
import * as mController from 'movieControler';
import { checkIfThereIsLogedInUser } from 'authenticator';
// import * as homeController from 'homeController';
// import * as myCookieController from 'myCookieController';
// import * as userController from 'userController';

// istances
let router = new MyRouter();
// let controller = new MainController(data);


router.on('register', function(params) { checkIfThereIsLogedInUser({ allowAnonimous: true, callback: userControler.register, params }); })
    .on('watch', function(params) { checkIfThereIsLogedInUser({ allowAnonimous: false, callback: openNearestCinema, params }); })
    .on('users', function(params) { checkIfThereIsLogedInUser({ allowAnonimous: false, callback: userControler.getAll, params }); })
    .on('movies', function(params) { checkIfThereIsLogedInUser({ allowAnonimous: false, callback: mController.showNewestMovies, params }); })
    .on('login', function(params) { checkIfThereIsLogedInUser({ allowAnonimous: true, callback: userControler.login, params }); })
    .on('logout', function(params) { checkIfThereIsLogedInUser({ allowAnonimous: false, callback: userControler.logout, params }); })
    .on('movie/:moviedata', function(params) { checkIfThereIsLogedInUser({ allowAnonimous: false, callback: mController.seeMovie, params }); });
// .on('login', userController.login)
// .on('about', controller.showAbout)
// 
// .on('user-panel', controller.showUserPanel)
// .on('posts/:id', (params) => controller.showPostByID(params))
// .on('posts', (params) => controller.postWorking(params))
// .on('user/:userID', (params) => controller.showUserPosts(params))
// .on('home', function() {
//     $contentDiv.text('');
// })
// 
// .on('login', function() {
//     templatesLoader.get('login')
//         .then(template => {
//             $contentDiv.html(template());
//         });
// })
// .on(() => {
//     router.navigate('/home');
// });

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());

// let result = controller.getNewestMovies();
// let resultTopRatingMovies = controller.getTopRatingMovies();
// let resultOscarMovies = controller.getOscarMovies();
// let resultByActor = controller.getMoviesByActor("Julia Roberts");
// let resultByRating = controller.getMoviesByRating(8);
// let resultByActor1 = controller.getMoviesByActor("Julia Roberts");
// let resultByGenre = controller.getMoviesByGenre("fantasy");
// let resultUpcomingMovies = controller.getUpcomingMovies();

// searchCinema.fIndClosestCinema();

// console.log("newest:") console.log(result);
// console.log("by actor:") console.log(resultByActor);
// console.log(resultByActor1);
// console.log("by rating:") console.log(resultByRating);
// console.log("by top rating:") console.log(resultTopRatingMovies);
// console.log("Search by oscars:") console.log(resultOscarMovies);
// console.log("Search by genre:") console.log(resultByGenre);
// console.log("Upcoming movies..") console.log(resultUpcomingMovies);