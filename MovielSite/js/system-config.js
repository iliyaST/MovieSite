SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        // System.js files
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // App files
        'main': 'js/main.js',
        'router': 'js/router.js',
        'requester': 'js/requester.js',
        'data': 'js/data.js',
        'userControler': 'js/controlers/userControler.js',
        'templatesLoader': "js/template-loader.js",
        "dataOMDBManager": 'js/dataOMDB.js',
        'closestCinema': 'js/ClosestCinema.js',
        'watchControler': 'js/controlers/watchControler.js',
        'movieControler': 'js/controlers/movieControler.js',
        'constants': 'js/common/constants.js',
        //    'homeController': 'js/controllers/home.js',
        //    'myCookieController': 'js/controllers/myCookie.js',
        //    'userController': 'js/controllers/user.js',
        //    'templates': 'js/templates.js',

        // Library files
        'handlebars': 'js/handlebars.js',
        'jquery': 'js/node_modules/jquery/dist/jquery.min.js'
    }
});