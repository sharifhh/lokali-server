const db = require('../models')
const connect = require('../dbConnection')

module.exports = {
  findAll: async function (req, res) {
    db.Post.find(req.query)
      .then(posts => res.json(posts))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  create: async (req, res) => {
    try {
      let post = await db.Post.create({
        ...req.body,
        author: req.session.userId
      })
      res.json(post)
    } catch (e) {
      console.log(e)
      res.status(422).json(e)
    }
  },
  update: function (req, res) {
    db.Post.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Post.findById(req.params.id)
      .then(post => post.remove())
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  }
}
