var express = require('express');
var app = express();
var pg = require('pg') ;
//var connectionString = process.env.DATABASE_URL ;
var start = new Date() ;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var server = require('http').Server(app);
var  port = process.env.PORT ||8008;
var client;
//client = new pg.Client(connectionString);
//client.connect();

app.use(cookieParser()); //just for auth
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));



app.get('/2', function(req,res){
  res.send('2');
});

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/trip', function(req, res){
  res.sendFile(__dirname+'/trip.html'); //
    //res.sendfile('/trip.html');
});




server.listen(port, function() {
  console.log('Listening on:', port);
});
