const db = require('../models')

module.exports = {
  findAll: function (req, res) {
    // const { query } = req.query
    // console.log(query)
    // db.GroupPost.find({
    //   title: { $regex: query, $options: 'i' }
    // })
    //   .then(post => res.json(post))
    //   .catch(err => console.log(err))
    db.GroupPost.find({}, (err, doc) => {
      err ? res.status(422).send('Not found') : res.json(doc)
    })
  },
  findById: function (req, res) {
    db.GroupPost.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.GroupPost.create(req.body)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.GroupPost.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.GroupPost.findById(req.params.id)
      .then(post => post.remove())
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  }
}
