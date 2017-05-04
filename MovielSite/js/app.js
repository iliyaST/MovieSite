/*jshint esversion: 6 */
import { MyRouter } from 'router';
// import * as homeController from 'homeController';
// import * as myCookieController from 'myCookieController';
// import * as userController from 'userController';

let router = new MyRouter();

router
    .on('watch', showProgramNearestCinema)
    .on('login', userController.login)
    .on('about', controller.showAbout)
    .on('register', userController.register)
    .on('logout', userController.logout)
    .on('user-panel', controller.showUserPanel)
    .on('posts/:id', (params) => controller.showPostByID(params))
    .on('posts', (params) => controller.postWorking(params))
    .on('user/:userID', (params) => controller.showUserPosts(params))
    .on('home', controller.home)
    .on(() => {
        router.navigate('/home');
    });

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());