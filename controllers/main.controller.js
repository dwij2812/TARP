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
            email=student_personal_db['Email']
            mobile=student_personal_db['Mobile']
            address=student_personal_db['Address']
          }
          passport.authenticate('local')(req, res, function(){
            res.render("../views/dashboard",{name:name,register:register_no})
        });
          });
      }
    };
});
}

exports.detail =(req,res)=>{
  register_no=req.body.regno
  console.log(register_no)
  console.log(req.body)
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
    email=student_personal_db['Email']
    mobile=student_personal_db['Mobile']
    address=student_personal_db['Address']
  }

    passport.authenticate('local')(req, res, function(){
      res.render("../views/profile",{name:name,register:register_no,email:email,attendance:"98",CGPA:"9.88",ccomp:"9",creg:"87",mobile:mobile,email:email,address:address});
      });
    });

}
