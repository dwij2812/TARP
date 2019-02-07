var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var courselist = new Schema({
  Coursecode:String,
  Coursename:String,
  L:Number,
  T:Number,
  P:Number,
  J:Number,
  C:Number,
  Teacher:String,
  slots:String

});
module.exports = mongoose.model('Course_list',courselist);
