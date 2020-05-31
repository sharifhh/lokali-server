const mongoose = require('mongoose')
const db = require('../models')
const { sendMail } = require('../constants')
const { eventBid } = require('../htmlTemplates')
module.exports = {
  findAll: function (req, res) {
    db.Post.find(req.query)
      .then(Posts => res.json(Posts))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.Post.findById(req.params.id)
      .then(Post => res.json(Post))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.Post.create(req.body)
      .then(Post => res.json(Post))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Post.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(Post => res.json(Post))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Post.findById(req.params.id)
      .then(Post => Post.remove())
      .then(Post => res.json(Post))
      .catch(err => res.status(422).json(err))
  },

  addBid: async function (req, res) {
    let postId = '5ecbf94b4f7b410e687aed0f'
    let author = await db.User.findOne({ _id: req.body.authorId })
    let bidder = await db.User.findOne({ _id: req.body.loggedUserId })
    console.log(author.email)
    sendMail(
      (to = author.email),
      (subject = `New Bid from ${bidder.name}`),
      (html = eventBid(author, bidder, {
        title: 'Dinner with friends',
        _id: postId
      })),
      (text = 'new bid xx')
    )
  },
  confirmBid: async function (req, res) {
    const { author, bidder, post } = req.body
    let users = await db.User.find({ _id: { $in: [author, bidder] } }, 'email')
    let usersEmail = users.map(user => user.email)
    try {
      // await sendMail((to = usersEmail), (subjet = 'Confirmation on bid!'))
      // let updatedUser = await db.User.update(
      //   { _id: bidder },
      //   { $push: { upcomingActivities: mongoose.Types.ObjectId(post) } }
      // )
      console.log(updatedUser)
      res.json(updatedUser)
    } catch (e) {
      console.log('Email was not sent now try again!!!')
    }
  }
}
