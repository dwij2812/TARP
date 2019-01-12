const mongoose =require('mongoose');
const express=require('express')
const passport = require('passport')
const login =require('../models/login_details.model')
const student_personal =require('../models/Student_details_personal.model')

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
          student_personal.findOne({
            Registerno:register_no
          })
          .exec(function(err,student_personal_db){
            if(err){
              res.send('error occured')
              console.log("error in student_personal")
            }
            else{
            name=student_personal_db['Name']
          }
          passport.authenticate('local')(req, res, function(){
            res.render("../views/dashboard",{name:name})
        });
          });
      }
    };
});
}
