const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GroupPostSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true,
    default: null
  },
  title: {
    type: String,
    trim: true,
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
    trim: true,
    required: true,
    default: null
  },
  time: {
    type: String,
    trim: true,
    required: true,
    default: null
  },
  date: {
    type: String,
    trim: true,
    required: true,
    default: null
  },
  desc: {
    type: String,
    trim: true,
    required: true,
    default: null
  },
  frequency: {
    type: String,
    trim: true,
    required: true,
    default: null
  },
  participants:{
      type:[mongoose.Types.ObjectId],
      default:[]
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

const GroupPost = mongoose.model('GroupPost', GroupPostSchema)

module.exports = GroupPost
