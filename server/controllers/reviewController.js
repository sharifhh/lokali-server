const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Review.find(req.query)
        .then(reviews => res.json(reviews))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Review.create(req.body)
        .then(review => res.json(review))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Review.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(review => res.json(review))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Review.findById(req.params.id)
        .then(review => review.remove())
        .then(review => res.json(review))
        .catch(err => res.status(422).json(err));
    }
  };