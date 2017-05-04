/*jshint esversion: 6 */
import { MyRouter } from 'router';
import * as userControler from 'userControler';
import { openNearestCinema } from 'watchControler';
import * as mController from 'movieControler';
// import * as homeController from 'homeController';
// import * as myCookieController from 'myCookieController';
// import * as userController from 'userController';

// istances
let router = new MyRouter();
// let controller = new MainController(data);


router.on('register', userControler.register)
    .on('watch', openNearestCinema)
    .on('users', userControler.getAll)
    .on('movies', mController.showNewestMovies)
    .on('login', userControler.login);
// .on('login', userController.login)
// .on('about', controller.showAbout)
// .on('logout', userController.logout)
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