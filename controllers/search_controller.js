const mongoose =require('mongoose');
const express=require('express')
const passport = require('passport')
const login =require('../models/login_details.model')
const student_personal =require('../models/Student_details_personal.model')
const student_academic =require('../models/Student_details_academic.model')

exports.search=(req,res)=>{
console.log(  req.body)
  res.redirect('/')

}
