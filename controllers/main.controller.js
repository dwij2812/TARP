const mongoose =require('mongoose');
const login =require('../models/login_details.model')
var express=require('express')
exports.index =(req,res)=>{
  res.render("../views/login")
}
exports.login =(req,res) =>{
  register_no=req.body.username
  password =req.body.password
  console.log(register_no)
  console.log(password)
  login.findOne({
    Registerno:register_no
    })
    .exec(function(err, login_db) {
      if(err) {
        res.send('error occured')
      } else {
        if((login_db['Registerno']) == register_no && login_db['Password'] == password){
          res.render("../views/dashboard",{name:register_no})

        }
        else {
          res.redirect("/")
                  }
      }
    });
}
