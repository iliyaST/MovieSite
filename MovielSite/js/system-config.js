SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        // System.js files
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // App files
        'myRouter': 'js/router.js',
        'requester': 'js/requester.js',
        'data': 'js/data.js',
        'userControler': './controlers/userControler.js',
        'templatesLoader': "./template-loader.js",
        //    'homeController': 'js/controllers/home.js',
        //    'myCookieController': 'js/controllers/myCookie.js',
        //    'userController': 'js/controllers/user.js',
        //    'templates': 'js/templates.js',

        // Library files
        'handlebars': '/handlebars.js',
        'main': '/main.js',
        'jquery': './node_modules/jquery/dist/jquery.min.js'


    }
});