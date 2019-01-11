var express = require('express');
var login =require(__dirname+'/models/login_details.model');
var app = express()
var bodyParser =require('body-parser')
var mongoose = require('mongoose');
var main_route = require('./route/main.route')
var db ='mongodb://localhost:27017/tarp'
app.use(bodyParser.json())
app.use(bodyParser())
app.set('view engine', 'ejs')
app.use(express.static(__dirname));
app.use(main_route);
mongoose.connect(db,function(err,db){
  if(err)
  throw err
  else {
    console.log("Database has been Successfully Connected")
  }
});

app.listen(3000, () => {
    console.log('Listening at Port 3000');
});
