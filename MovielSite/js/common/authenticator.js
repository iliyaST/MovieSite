import * as data from 'data';
export function checkIfThereIsLogedInUser({ allowAnonimous, callback }) {
    if (allowAnonimous) {
        callback();
    } else {
        if (data.hasUser()) {
            callback();
        } else {
            window.location.href = "#/login";
            toastr.error("Please log in first");
        }
    }
}