var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
require('dotenv').config();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));


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
   
  app.listen(PORT);