const db = require('../models')

module.exports = {
  findAll: function (req, res) {
    // const { query } = req.query
    // console.log(query)
    // db.OneonOnePost.find({
    //   title: { $regex: query, $options: 'i' }
    // })
    //   .then(post => res.json(post))
    //   .catch(err => console.log(err))
    db.OneonOnePost.find({}, (err, doc) => {
      err ? res.status(422).send('Not found') : res.json(doc)
    })
  },
  findById: function (req, res) {
    db.OneonOnePost.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.OneonOnePost.create(req.body)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.OneonOnePost.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.OneonOnePost.findById(req.params.id)
      .then(post => post.remove())
      .then(post => res.json(post))
      .catch(err => res.status(422).json(err))
  }
}
