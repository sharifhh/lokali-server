const db = require('../models')
const { sendMail } = require('../constants')
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
    console.log('REQ.BODY', req.body)
    let authorEmail = await db.User.findOne({ _id: req.body.authorId }, 'email')
    let bidder = await db.User.findOne({ _id: req.body.loggedUserId })
    console.log(authorEmail)
    sendMail(
      authorEmail,
      `New Bid from ${bidder.name}`,
      (html = ''),
      (text = 'new bid')
    )
  }
}
