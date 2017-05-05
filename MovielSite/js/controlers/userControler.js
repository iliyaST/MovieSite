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
            // $("#btn-reg").on("click", function() {
            $('#registerForm').validator().on('submit', function(e) {
                if (e.isDefaultPrevented()) {
                    // handle the invalid form...
                } else {
                    var user = {
                        firstname: $("#firstName").val(),
                        lastname: $("#familyName").val(),
                        username: $("#username").val(),
                        password: $("#inputPassword").val(),
                        ismale: ($('input[name=gender]:checked').val() === 'true') ? true : false,
                        email: $("#email").val()
                    };
                    data.register(user)
                        .then(function(res) {
                            console.log(res);
                            if (!res) {
                                data.addMoviesUser(user)
                                    .then(function(res) {
                                        var userMoviesId = res; //as string  
                                        window.location.href = "#/login";
                                        toastr.success(`User created Successfully!Please login`);

                                    })
                                    .catch(function(err) {
                                        toastr.error(JSON.stringify(err.message));
                                    });
                            }
                        })
                        .catch(function(err) {
                            toastr.error(JSON.stringify(err.responseText));
                        });
                }

            });
        });
}

export function login() {
    templatesLoader.get('login')
        .then(template => {
            $contentDiv.html(template());

            $("#btn-log").on("click", function() {
                var user = {
                    username: $("#userName-log").val(),
                    password: $("#password-log").val()
                        // shouldRemember:$("#password-log").val(),
                };
                data.signIn(user)
                    .then(function(res) {
                        window.location.href = "#/watch";
                        $("#btn-login").addClass("hidden");
                        $("#btn-logout").removeClass("hidden");
                        toastr.success("Hello" + " " + res);

                    })
                    .catch(function(err) {
                        toastr.error(err.responseText);
                    });


            });
        });
}

export function logout() {
    data.signOut()
        .then(function(res) {
            location.href = '#/login';
            $("#btn-login").removeClass("hidden");
            $("#btn-logout").addClass("hidden");
            toastr.success('Logged out');
        })
        .catch(function(err) {
            toastr.error(err.responseText);
        });

}

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