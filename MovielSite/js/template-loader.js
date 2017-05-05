/*jshint esversion: 6 */

import { Handlebars } from './handlebars.js';

class TemplatesLoader {

    constructor() {
        this.templatesCache = {};
    }

    get(templateName) {
        return new Promise((resolve, reject) => {
            if (this.templatesCache[templateName]) {
                resolve(Handlebars.compile(this.templatesCache[templateName]));
            }

            $.get(`./templates/${templateName}.handlebars`, template => {
                this.templatesCache[templateName] = template;
                resolve(Handlebars.compile(template));
            });
        });
    }
}

let templatesLoader = new TemplatesLoader();


export { templatesLoader };