const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },

  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },

  password:{
    type:String,
    required:true,
    trim:true,
  },
  
  profileImg:{
    type:String,
    default:'https://res.cloudinary.com/dppogsm2u/image/upload/v1586354844/default_gywvgr.jpg',
    required:true
  }
  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
