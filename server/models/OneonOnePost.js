const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OneonOnePostSchema = new Schema({
  type: {
    type: String,
    trim:true,
    required: true,
    default: null
  },
  title: {
    type: String,
    trim:true,
    required: true,
    default: null
  },
  tags: {
    type: [String],
    required: true,
    default: null
  },
  location: {
    type: String,
    trim:true,
    required: true,
    default: null
  },
  time: {
    type: String,
    trim:true,
    required: true,
    default: null
  },
  date: {
    type: String,
    trim:true,
    required: true,
    default: null
  },
  desc: {
    type: String,
    trim:true,
    required: true,
    default: null
  },
  createdAt:{
      type:Date,
      required:true,
      default:Date.now()
      
  }
})

const OneonOnePost = mongoose.model('OneonOnePost', OneonOnePostSchema)

module.exports = OneonOnePost
