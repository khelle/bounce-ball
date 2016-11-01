// set up ==============================================================================================================

var express         = require('express');
var app             = express();                    // create our app w/ express
var port            = process.env.PORT || 3000;     // set the port
var morgan          = require('morgan');            // log requests to the console (express4)
var bodyParser      = require('body-parser');       // pull information from HTML POST (express4)
var path            = require('path');              // path utils

// configuration =======================================================================================================

app.use(express.static(path.join(__dirname, '/public')));   // set the static files location to /public
app.use(morgan('dev'));                                     // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));        // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                 // parse application/json

app.set('views', path.join(__dirname, 'resources/views'));  // set the views files location to /resources/views
app.set('view engine', 'twig');                             // set view engine to twig

// routes ==============================================================================================================

require('./routes/app.js')(app);

// errors ==============================================================================================================

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

// listen ==============================================================================================================

app.listen(port);

console.log("App listening on port " + port);
