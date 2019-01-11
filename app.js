var express = require('express');
//var login =require(__dirname+'/models/login_details.model');
var app = express();
var mongoose = require('mongoose');
var db ='mongodb://localhost:27017/tarp'
var main_route = require('./route/main.route')
mongoose.connect(db,function(err,db){
  if(err)
  throw err
  else {
    console.log("Database has been Successfully Connected")
  }
});
app.set('view engine', 'ejs')
app.use(express.static(__dirname));
app.use(main_route);
app.listen(8082, () => {
    console.log('Listening at Port 8082');
});
