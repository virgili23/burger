var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

// app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
//
var routes = require('./controllers/routes.js');
app.use('/', routes);

app.get('/', function (req, res) {

    console.log("Listening on Port 3000");
    
    res.send('Hello World');
  })
   
  app.listen(3000);