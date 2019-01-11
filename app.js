var express = require('express');
var login =require(__dirname+'/models/login_details.model');
var app = express();
var mongoose = require('mongoose');
var db ='mongodb://localhost:27017/tarp'
mongoose.connect(db,function(err,db){
  if(err)
  throw err
  else {
    console.log("con")
  }
});
login.findOne({
  Registerno: "16BLC1002"
  }).exec(function(err, books) {
    if(err) {
      res.send('error occured')
    } else {
        console.log(books)
      }


  });
app.listen(8082, () => {
    console.log('Listening at Port 8082');
});
