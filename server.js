var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.get('/', function (req, res) {

    console.log("Listening on Port 3000");
    
    res.send('Hello World')
  })
   
  app.listen(3000)