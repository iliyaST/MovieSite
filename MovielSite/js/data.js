import * as requester from 'requester';

//make calls to sql;

var transform = function(obj) {
    var str = [];
    for (var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
};

/* Users */

export function register(user) {

    var reqUser = {
        username: user.username,
        password: CryptoJS.SHA1(user.username + user.password).toString(),
        confirmpassword: CryptoJS.SHA1(user.username + user.password).toString(),
        email: user.email
    };
    var contentType = 'application/x-www-form-urlencoded';

    var body = transform(reqUser);

    return requester.postSql('api/account/register', {}, body, contentType);
}

export function addMoviesUser(user) {
    var reqUser = {
        username: user.username,
        password: CryptoJS.SHA1(user.username + user.password).toString(),
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        ismale: user.ismale
    };
    var contentType = 'application/json';

    var body = reqUser;

    return requester.postSqlStringify('api/users/Register', {}, body, contentType);
}


export function signIn(user) {
    var reqUser = {
        username: user.username,
        password: CryptoJS.SHA1(user.username + user.password).toString(),
        grant_type: "password"
    };

    var contentType = 'application/x-www-form-urlencoded';

    var body = transform(reqUser);

    // var header = { "Access-Control-Allow-Origin": "*" };

    return requester.postSql('token', {}, body, contentType)
        .then(function(resp) {
            console.log(resp);
            var user = resp.result;
            localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
            localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);
            return user;
        });
}

function signOut() {
    var promise = new Promise(function(resolve, reject) {
        localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
        localStorage.removeItem(LOCAL_STORAGE_AUTHKEY_KEY);
        resolve();
    });
    return promise;
}