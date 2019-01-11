  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var login = new Schema({
    Registerno:String,
    Password:String,
    type:String
  });
  module.exports = mongoose.model('login_detail',login);
