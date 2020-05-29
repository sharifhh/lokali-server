const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostScema = new Schema({
  heading: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
    default: 'Development'
  },
  category: {
    type: String,
    required: true,
    default: 'Development'
  },
  // whichever user this post belongs to.
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  time: { type: String },
  date: { type: String },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  interestedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',

    }
  ]
  //   description: {
  //     type: String,
  //     required: true,
  //   },
  //   frequency: {},
  //   endDate: {
  //     type: Date,
  //     required: true,
  //   },
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
