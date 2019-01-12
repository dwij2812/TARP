var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var student_personal = new Schema({
  Registerno:String,
  Name:String,
  Password:String,
  Mobile:Number,
  Email:String,
  Address:String
});
module.exports = mongoose.model('student_detail_personal',student_personal);
