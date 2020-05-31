const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//User schema mockup:

//name
//surname
//email
//password
//profileImg
//phone
//gender
//location
//profession
//skills
//hobbies
//rating
//badges
//offerPosted
//ofersCompleted


const UserSchema = new Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  surname:{
    type:String,
    required:true,
    trim:true
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
    default:'temp-pass'
  },
  
  profileImg:{
    type:String,
    default:'https://res.cloudinary.com/dppogsm2u/image/upload/v1586354844/default_gywvgr.jpg',
    required:true
  },
  verified:{
    type:Boolean,
    default:false,
    required:true
  },
  upcomingActivities:{
    type:[mongoose.Types.ObjectId]
  }

  // location:{},
  // phone:{}

  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
