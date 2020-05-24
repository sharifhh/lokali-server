const db = require("../models");
const connect = require("../dbConnection");

module.exports = {
  findAll: function (req, res) {
    const { query } = req.query;
    db.Event.find({
      $or: [
        { heading: { $regex: query, $options: "i" } },
        { subheading: { $regex: query, $options: "i" } },
      ],
    })
      .then((events) => res.json(events))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Event.findById(req.params.id)
      .then((event) => res.json(event))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Event.create(req.body)
      .then((event) => res.json(event))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Event.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((event) => res.json(event))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Event.findById(req.params.id)
      .then((event) => event.remove())
      .then((event) => res.json(event))
      .catch((err) => res.status(422).json(err));
  },
};
