const mongoose =require('mongoose');
const login =require('../models/login_details.model')
var express=require('express')
var passport = require('passport')
exports.index =(req,res)=>{
  res.render("../views/login")
}
exports.login =(req,res) =>{
  register_no=req.body.username
  password =req.body.password
  login.findOne({
    Registerno:register_no
    })
    .exec(function(err, login_db) {
      if(err) {
        res.send('error occured')
      }
      else {

        if((login_db['Registerno']) == register_no && login_db['Password'] == password){
          passport.authenticate('local')(req, res, function(){
            res.render("../views/dashboard",{name:req.body.username})
        });
      }
    };
});
}
