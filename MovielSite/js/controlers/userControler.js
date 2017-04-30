import * as data from 'data';
import { templatesLoader } from 'templatesLoader';
import * as requester from 'requester';

const $contentDiv = $('#content-container');

const LOCALSTORAGE_AUTH_KEY_NAME = 'authkey';
const AUTH_KEY_HEADER = 'x-auth-key';
const WEB_API_SQL = 'http://localhost:51443/';

export function register() {
    templatesLoader.get('register')
        .then(template => {
            $contentDiv.html(template());
        });
}

// export function tryToRegister() {
//     const username = $('#username').val();
//     const password = $('#password').val();
//     const passHash = password; // HASH ME
//     const firstName = $('#firstName').val();
//     const familyName = $('#familyName').val();
//     const email = $('#email').val();
//     const city = $('#city').val();

//     var user = new {
//         username,
//         passHash,
//         firstName,
//         familyName,
//         email
//     }

//     data.register(username, passHash)
//         .then(
//             result => {
//                 toastr.success(`User ${username} registered successfully`);
//                 login()
//             },
//             errorMsg => toastr.error(errorMsg));
// }

export function getAll() {
    var token = 'Bearer' + "sdfsdfsdf";
    //  sessionStorage.getItem('token');
    var header = new Object();
    header.Authorization = token;
    requester.getSql(WEB_API_SQL + 'api/users/get', token)
        .then(result => {
            $contentDiv.html(result);
        });
    // loadTemplate('auth')
    //     .then(template => {
    //         $appContainer.html(template());
    //     });
}

// export function login() {
//     const username = $('#input-username').val();
//     const password = $('#input-password').val();
//     const passHash = password; // HASH ME

//     data.login(username, passHash)
//         .then(
//             result => {
//                 localStorage.setItem(LOCALSTORAGE_AUTH_KEY_NAME, result.result.authKey);
//                 $('#auth-btn').addClass('hidden');
//                 $('#signout-btn').removeClass('hidden');
//                 toastr.success(`Hi, ${username}`);
//                 location.href = '#/home';
//             },
//             errorMsg => toastr.error(errorMsg));
// }



// export function logout() {
//     localStorage.removeItem(LOCALSTORAGE_AUTH_KEY_NAME);
//     $('#auth-btn').removeClass('hidden');
//     $('#signout-btn').addClass('hidden');
//     //toastr.success('Logged out');
//     location.href = '#/home';
// }