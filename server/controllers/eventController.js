const db = require("../models");
const connect = require('../dbConnection');

module.exports = {
    findAll: async function(req, res) {
        db.Event.find(req.query)
        .then(events => res.json(events))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Event.create(req.body)
        .then(event => res.json(event))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Event.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(event => res.json(event))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Event.findById(req.params.id)
        .then(event => event.remove())
        .then(event => res.json(event))
        .catch(err => res.status(422).json(err));
    }
  };