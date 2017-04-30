function request(url, type, body) {
    const promise = new Promise((resolve, reject) => $.ajax({
        url,
        type,
        data: body,
        success: resolve,
        error: reject
    }));

    return promise;
}

// Headers and content Type isnt allowed on omdb....So u can just use the function requestSQL 
// TODO: uncomment:?

function requestSql(url, type, headers, body) {
    const promise = new Promise((resolve, reject) => $.ajax({
        url,
        type,
        data: body,
        contentType: "application/json",
        headers,
        success: resolve,
        error: reject
    }));

    return promise;
}

export function get(url) {
    return request(url, 'GET', '');
}

export function post(url, body) {
    return request(url, 'POST', JSON.stringify(body));
}

export function put(url, body) {
    return request(url, 'PUT', JSON.stringify(body));
}

export function getSql(url, headers) {
    return requestSql(url, 'GET', headers);
}

export function postSql(url, headers, body) {
    return requestSql(url, 'POST', headers, JSON.stringify(body));
}

export function putSql(url, headers, body) {
    return requestSql(url, 'PUT', headers, JSON.stringify(body));
}