const mongoose =require('mongoose');
const login =require('../models/login_details.model')
var express=require('express')
exports.index =(req,res)=>{
  console.log('check main_controller')
  res.render("../views/login")
}
