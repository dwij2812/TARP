var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var student_academic = new Schema({
  Registerno:String,
  Credits_c:Number,
  Credits_R:Number,
  CGPA:String,
  List_Course: [
        {
            coursecode: String,
            faculty: String,
            slot: String
        }
    ]
});
module.exports = mongoose.model('student_detail_academic',student_academic);
