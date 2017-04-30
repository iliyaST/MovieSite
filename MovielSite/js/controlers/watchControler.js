import * as data from 'data';
import { templatesLoader } from 'templatesLoader';
import { ClosestCinema } from 'closestCinema';

const $contentDiv = $('#content-container');

export function openNearestCinema() {
    $contentDiv.html('<iframe id="inner-site" src="" frameborder="0"></iframe>' +
        '<div id="contacts"><span id="location">Our location on map</span></div>' +
        '<iframe id="right-site" src="" frameborder="0"></iframe>');
    let searchCinema = new ClosestCinema();
    searchCinema.fIndClosestCinema();
}