// Generated by CoffeeScript 1.8.0
(function() {
    var ModelProxy, app, bodyParser, config, cookieParser, express, favicon, logger, path, routes;

    express = require('express');

    path = require('path');

    favicon = require('static-favicon');

    logger = require('morgan');

    cookieParser = require('cookie-parser');

    bodyParser = require('body-parser');

    //routes = require('./routes/index');


    ModelProxy = require('ali-data-proxy-lite');

    app = express();

    app.set('views', path.join(__dirname, 'views'));

    app.set('view engine', 'jade');

    app.use(favicon());

    app.use(logger('dev'));

    ModelProxy.init('./../interface_demo.json');

    app.use('/model/', ModelProxy.Interceptor);
    app.use(bodyParser.json());


    app.use(bodyParser.urlencoded());

    app.use(cookieParser());

    app.use(require('less-middleware')(path.join(__dirname, 'public')));

    app.use(express["static"](path.join(__dirname, 'public')));

    //app.use('/', routes);

    app.get('/**', function(req, res) {
        return res.sendfile('./public/index.html');
    });

    app.use(function(req, res, next) {
        var err;
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
    });

    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            return res.render('error', {
                message: err.message,
                error: err
            });
        });
    } else {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            return res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }

    module.exports = app;

}).call(this);

//# sourceMappingURL=app.js.map