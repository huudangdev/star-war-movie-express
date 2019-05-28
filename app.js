var express = require("express")
var app = express();
var routes = require('./routes')
var port = 3000;

var path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

//home
app.get('/', routes.home);

// movies
app.get('/season/:id?', routes.movies_single);

//notFound
app.get('*', routes.notFound);

app.listen(process.env.port || port);