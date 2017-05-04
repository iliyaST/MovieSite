import { templatesLoader } from 'templatesLoader';
import { DataOMDBController } from "dataOMDBManager";
import * as constantManager from 'constants';

const OMDBController = new DataOMDBController();
const $contentDiv = $('#content-container');
const keyWords = constantManager.getWords();

function getAllMovies() {
    const resultArray = [];

    keyWords.forEach(word => {
        let currentRequestURL = `http://www.omdbapi.com/?t=${word}&y=2017&type=movie`;
        let currentMovies = OMDBController.getNewestMovies(currentRequestURL);
        resultArray.push(currentMovies);
    })

    return resultArray;
}

export function showNewestMovies() {
    templatesLoader.get('movies')
        .then(template => {
            let movies = getAllMovies();
            console.log(movies);
            let result = template(movies);
            $contentDiv.html(result);
        })
}